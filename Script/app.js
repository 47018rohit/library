
//class: book 

class Book{
  constructor(title, author , read){
    this.title = title;
    this.author = author;
    this.read = read.value;
  }

}

//class:ui

class UI{
  static displayBooks() {
    const storedBooks =[
      {
      title: "harry potter",
      author: "jkr",
      read: "not yet" 
      },
      {
        title: "lord of the",
        author: "jkk",
        read:"not yet"
      }
   ];

   const books = storedBooks;

   books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book){
    const cardContainer = document.querySelector("#cardContainer");

    const card = document.createElement("div");
    card.classList.add('card')

    //Event: remove books

    function removeCard(el){
      el.parentElement.remove();
    }

    card.innerHTML = `
        <h1>${book.title}</h1>
        <h5>Author : ${book.author}</h5>
        <select name="readChoice" id="readChoice">
          <option value="option1">yes</option>
          <option value="option2">not yet</option>
          ${book.read}
        </select>
    `;
    const removebtn = document.createElement('button')
    removebtn.innerHTML = "Remove"
    let unique = Math.floor(Math.random()*1000);
    removebtn.classList.add(`${unique}`);

    card.appendChild(removebtn);
    cardContainer.appendChild(card);

    removebtn.addEventListener('click' , (e)=>{
      removeCard(e.target);
    })
      
  }


  static clearFields(){
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    
  }
}

//class:storage
const storage = localStorage;

// storage.setItem()


//Event: cards

document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Add books
document.querySelector(".details").addEventListener('submit',(e)=>{
  //prevent actual submit
  e.preventDefault();
  
  //get form values
  const title = document.querySelector("#title").value;
  const author= document.querySelector("#author").value;
  const read = document.querySelector("#readChoice").value;

  //validate
  if(title === '' || author ===""){
    alert("plz fill all details")
  }else{
    //instantiate book
    const book = new Book(title, author, read);

    //add book to UI
    UI.addBookToList(book)

    //clear fields
    UI.clearFields();

  }

  
})



