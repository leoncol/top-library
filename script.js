const myLibrary = []; // Empty array to save the books to.

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + .center-button-div > #open-button");
const closeButton = document.querySelector("dialog #close-button");
const bookTitleInput = document.querySelector("#book-title");

const bookAuthorInput = document.querySelector("#book-author");

const bookPagesInput = document.querySelector("#book-pages");

const bookStatusInput = document.querySelector("#book-status");

const submitButton = document.querySelector("#submit");
const enterBookForm = document.querySelector("#enter-book");
const table = document.querySelector("table");
let bookStatus = true;


class Book {
    constructor(title, author, pages, read){ // This is the constructor for the books.
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    isRead(){
        if (this.read == true){
            this.read = "already read"
        } else {
            this.read = "not read yet"
        }
    }

}


class CreatedBook extends Book {
    alreadyRead(){
        if (this.read == "already read"){
            this.read = "not read yet"
        } else if (this.read == "not read yet"){
            this.read = "already read"
        }
        return this.read;
    }
}

        

function retrieveBookStatus(){
    if (bookStatusInput.value == "true"){
        bookStatus = true;
    } else {
        bookStatus = false;
    }
}



function addBookToLibrary() { // This calls the constructor and adds the books to the library.

const bookTitle = bookTitleInput.value;
const bookAuthor = bookAuthorInput.value;
const bookPages = bookPagesInput.value;

retrieveBookStatus();
  let newBook = new CreatedBook(bookTitle, bookAuthor, bookPages, bookStatus);
  newBook.isRead();
  myLibrary.push(newBook);
  displayAndDelete(newBook);
}

function displayAndDelete(book){ // This loops through the array and displays the info from the books.
        const displayBook = document.createElement("tr");
        displayBook.setAttribute("data-id", book.id);
        table.appendChild(displayBook);
        const idInfo = document.createElement("td");
        idInfo.textContent = book.id
        displayBook.appendChild(idInfo);
        const titleInfo = document.createElement("td");
        titleInfo.textContent = book.title;
        displayBook.appendChild(titleInfo);
        const authorInfo = document.createElement("td");
        authorInfo.textContent = book.author;
        displayBook.appendChild(authorInfo);
        const pagesInfo = document.createElement("td");
        pagesInfo.textContent = book.pages;
        displayBook.appendChild(pagesInfo);
        const statusInfo = document.createElement("td");
        statusInfo.textContent = book.read;
        statusInfo.setAttribute("data-id", book.id);
        displayBook.appendChild(statusInfo);
        const deleteBook = document.createElement("td");
        displayBook.appendChild(deleteBook);
        const wrapButtons = document.createElement("div");
        wrapButtons.setAttribute("class", "wrap-buttons");
        deleteBook.appendChild(wrapButtons);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        wrapButtons.appendChild(deleteButton);
        deleteButton.setAttribute("data-id", book.id);
        const toggleStatusButton = document.createElement("button");
        toggleStatusButton.textContent = "Read";
        toggleStatusButton.setAttribute("data-id", book.id);
        wrapButtons.appendChild(toggleStatusButton);






        
        
        
      

      
       
    
      
        
        
        

    }
      

    function deleteBookFunction (bookId, tableDisplay){
        const getIndex = (element) => element.id == bookId;
        let index =  myLibrary.findIndex(getIndex);
        myLibrary.splice(index, 1);
        table.removeChild(tableDisplay);
                



}        

    function getElement (elementId){
        const getIndex = (element) => element.id == elementId;
        let index =  myLibrary.findIndex(getIndex);
        return myLibrary[index].alreadyRead();
    }


table.addEventListener("click", (event) => {

    console.log("working");
    let target = event.target;
    if(target.textContent == "Delete") {
        let tableDisplay = document.querySelector(`tr[data-id="${target.dataset.id}"]`);
        deleteBookFunction(target.dataset.id, tableDisplay);
    } else if (target.textContent == "Read"){
        let statusDisplay = document.querySelector(`td[data-id="${target.dataset.id}"]`);
        statusDisplay.textContent = getElement(target.dataset.id);
    }
   
    });

    const title = document.getElementById("book-title");
    const author = document.getElementById("book-author");
    const pages = document.getElementById("book-pages");
    title.setCustomValidity("Enter a title!");
    author.setCustomValidity("Enter an author!");
    pages.setCustomValidity("Enter a number of pages!");
    
    
        title.addEventListener("input", (event) => {
            if (title.validity.valueMissing){
                title.setCustomValidity("Enter a title!");
            } else {
                title.setCustomValidity("");
            };
        })
    
        author.addEventListener("input", (event) => {
            if (author.validity.valueMissing){
                author.setCustomValidity("Enter an author!");
            } else {
                author.setCustomValidity("");
            }
        });
    
        pages.addEventListener("input", (event) => {
            if (pages.validity.valueMissing){
                pages.setCustomValidity("Enter a number of pages!");
            } else {
                pages.setCustomValidity("");
            }
        });
        
        
   
    enterBookForm.addEventListener("submit", function (event){
        event.preventDefault();
        addBookToLibrary();
        dialog.close();
        
        
    });
    
    /* submitButton.addEventListener("click", () => {
        addBookToLibrary();
      
    }); */
    
    
    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
      dialog.showModal();
    });
    
    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
      dialog.close();
    });
    

    
   
        
        
       
    
        
    
    