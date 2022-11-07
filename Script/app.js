
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
        <h5>Author : ${book.author}</h5>`;
    
    const readChoice = document.querySelector("#readChoice")
    
    const editRead = document.createElement('button')
    editRead.innerHTML = readChoice.value;
    editRead.setAttribute('class', 'readValue')
    card.append(editRead)

    //read || not read switch
      editRead.addEventListener('click',(e)=>{
        if(e.target.innerHTML === 'Read'){
            editRead.innerHTML = 'Not read'
        }else{
            editRead.innerHTML = "Read"
          }
        
      })
    //switch ends

    const removebtn = document.createElement('button')
    removebtn.innerHTML = "Remove"
    removebtn.classList.add('remove');

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
class store{
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    }else{
      books = JSON.parse(localStorage.getItem('books'))
    }
    return books;
  }

  static addBook(book){
    const books = store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringyfy(books));
  }

  static removeBook(){
    const books = store.getBooks();
    books.forEach((books,index)=>{
      
    })
  }
}


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
    alert('Please fill in all the fields')
  }else{
    //instantiate book
    const book = new Book(title, author, read);

    //add book to UI
    UI.addBookToList(book)

    //clear fields
    UI.clearFields();

  }

  
})



