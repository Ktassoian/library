// stores books
let myLibrary = [];

// new book constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}


function addBookToLibrary(title, author, pages) {
    let newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
    makeCard(newBook)
}


const bookForm = document.querySelector("#book-form");

bookForm.addEventListener('submit', function (e) {
    const title = (bookForm.elements.title);
    const author = (bookForm.elements.author);
    const pages = (bookForm.elements.pages);
    addBookToLibrary(title.value, author.value, pages.value)
    title.value = '';
    author.value = '';
    pages.value = '';
    let form = document.querySelector("#book-form");
    form.style.display = "none";
    addBookBtn.style.display = "block";
    e.preventDefault();
});





function makeCard(newBook) {
    // make book container
    const container = document.querySelector('#card');
    // create card elements
    let cardCol = document.createElement('div');
    let newCard = document.createElement('div');
    let cardBody = document.createElement('div');
    let cardTitle = document.createElement('h4');
    let cardAuthor = document.createElement('h6');
    let cardPages = document.createElement('p');
    let deleteBook = document.createElement('button');

    // creates div to hold checkbox and label
    let checkDiv = document.createElement('div');
    let checkbox = document.createElement('input');
    let checkboxLabel = document.createElement('label');

    checkDiv.classList.add('form-check', 'form-check-inline');
    checkbox.classList.add('form-check-input');
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', 'checkbox');
    checkboxLabel.classList.add('form-check-label');
    checkboxLabel.setAttribute('for', 'checkbox');

    // adds a class to card elemnts 
    cardCol.classList.add('col');
    newCard.classList.add('card', 'h-100')
    cardBody.classList.add('card-body');
    cardCol.classList.add('col')
    cardTitle.classList.add('card-title', 'text-center');
    cardAuthor.classList.add('card-subtitle', 'mb-2', 'text-muted', 'text-center');
    cardPages.classList.add('card-pages');
    deleteBook.classList.add('btn', 'btn-danger', 'd-grid', 'gap-2', 'd-md-flex', 'justify-content-md-end');
    deleteBook.setAttribute('type', 'button');
    // create card structure 
    container.append(cardCol);
    cardCol.append(newCard)
    newCard.append(cardBody);
    cardBody.append(cardTitle);
    cardBody.append(cardAuthor);
    cardBody.append(cardPages);
    cardBody.append(checkDiv);
    checkDiv.append(checkbox);
    checkDiv.append(checkboxLabel);
    cardBody.append(deleteBook);

    // add card data to card element 
    cardTitle.textContent = newBook.title;
    cardAuthor.textContent = `By: ${newBook.author}`;
    cardPages.textContent = `pages: ${newBook.pages}`;
    checkboxLabel.textContent = 'Done Reading'
    deleteBook.textContent = 'Delete Book';
    // adds functionality to button
    deleteBook.addEventListener('click', function () {
        newCard.remove(this);
        myLibrary.pop(this)
    })
    checkbox.addEventListener('input', function (e) {
        cardBody.style.backgroundColor = '#F2F2F2';
        cardTitle.style.color = '#6B4F4F';
        myLibrary.pop(cardCol)
        addBookToLibrary(this)
    })
}





// displays the book form
const addBookBtn = document.querySelector("#btn");
addBookBtn.addEventListener('click', function () {
    let form = document.querySelector("#book-form");

    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
        addBookBtn.style.display = "none";
    }

})

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)


myLibrary.push(theHobbit)










