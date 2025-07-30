const myLibrary = []; // Empty array to save the books to.

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + #open-button");
const closeButton = document.querySelector("dialog #close-button");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("book-pages");
const bookStatus = document.querySelector("#book-status");

function retrieveBookStatus(){
    if (bookStatus.value == "true"){
        bookStatus = true;
    } else {
        bookStatus = false;
    }
}



// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});


function Book(title, author, pages, read){ // This is the constructor for the books.
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read == true){
        this.read = "already read"
    } else {
        this.read = "not read yet"
    }
    this.bookInfo = function(){
        return (`${this.title} by ${this.author}, has ${this.pages} pages. status: ${this.read} `)
    }
}

function addBookToLibrary() { // This calls the constructor and adds the books to the library.
  let newBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
  myLibrary.push(newBook);
}

function loopArray(array){ // This loops through the array and displays the info from the books.
    const table = document.querySelector("table");
    array.forEach(function (book) {
        let displayBook = document.createElement("tr");
        table.appendChild(displayBook);
        
        let idInfo = document.createElement("td");
        idInfo.textContent = book.id;
        displayBook.appendChild(idInfo);
        let titleInfo = document.createElement("td");
        titleInfo.textContent = book.title;
        displayBook.appendChild(titleInfo);
        let authorInfo = document.createElement("td");
        authorInfo.textContent = book.author;
        displayBook.appendChild(authorInfo);
        let statusInfo = document.createElement("td");
        statusInfo.textContent = book.read;
        displayBook.appendChild(statusInfo);

        
    })
}