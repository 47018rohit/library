
//class: book 

class Book{
  constructor(title, author , read){
    this.title = title;
    this.author = author;
    this.read = read;
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

    card.innerHTML = `
        <h1>${book.title}</h1>
        <h5>Author : ${book.author}</h5>
        <select name="readChoice" id="readChoice">
          <option value="option1">yes</option>
          <option value="option2">not yet</option>
        
        </select>
        <button class="remove" id="">remove</button>
    `;

    cardContainer.appendChild(card);

  
    // const remove = document.querySelector(``)
    //   remove.addEventListener('click', () => {
    //     console.log("clcked")
    //   });
  }

  static clearFields(){
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    
  }
}

//class:storage



//Event: cards

document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Add books
document.querySelector(".details").addEventListener('submit',(e)=>{
  
  e.preventDefault();
  
  const title = document.querySelector("#title").value;
  const author= document.querySelector("#author").value;
  const read = document.querySelector("#readChoice").value;

  const book = new Book(title, author, read);

  UI.addBookToList(book)

  UI.clearFields();

})

//Event: remove books



