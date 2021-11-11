let myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function (book) {
    //     return `${title} by ${author}, ${pages} pages, ${read}`
    // }
}
const addBook = document.getElementById("addBook");
const submitBook = document.querySelector('#submitBook');
const inputs = document.querySelectorAll('.formInput');
const bookContainer = document.querySelector(".addBookForm");


addBook.addEventListener('click', () => {
    let form = document.querySelector(".addBookForm");

    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
        addBook.style.display = "none";
    }
})

// submitBook.addEventListener('click', addBookToLibrary);
// title = document.getElementById("title").value
// author = document.getElementById("author").value
// pages = document.getElementById("pages").value
// myLibrary.push(newBook)

function getInputs() {
    inputs.forEach(input)
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    submitBook.addEventListener('click', addBookToLibrary);
    checkInputs(title, author, pages)
}
function checkInputs(title, author, pages) {
    let checkInputsArr = [title, author, pages]
    let controlArr = []
    for (let i = 0; i < checkInputsArr.length; i++) {
        if (!checkInputsArr[i] == '') {
            controlArr.push(checkInputsArr[i])
        }
    }
    if (controlArr.length < 3) {
        inputs.forEach(input => {
            if (input.value === '') {
                input.classList.add('error')
            }
        })
    } else {
        addBookToLibrary(title, author, pages)

    }
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    makeNewCard()
}


function makeNewCard() {
    for (let books in myLibrary) {
        let newCard = document.createElement('div')
        let cardBody = document.createElement('div')
        let title = document.createElement('h5')
        let author = document.createElement('h6')
        let totalPages = document.createElement('p')
        // let deleteButton = document.createElement('button').classList.add('btn', 'btn-danger', 'deleteButton')
        // let toggleButton = document.createElement('button').classList.add('btn', 'btn-primary', 'toggleButton')

        newCard.classList.add('card')
        cardBody.classList.add('card-body')
        title.classList.add('card-title')
        author.classList.add('card-subtitle', 'mb-2', 'text-muted')
        totalPages.classList.add('card-text')
        // deleteButton.onclick = deleteBook
        // toggleButton.onclick = toggleRead
        bookContainer.appendChild(newCard)
        newCard.appendChild(cardBody)
        cardBody.appendChild(title)
        cardBody.appendChild(author)
        cardBody.appendChild(pages)
        // cardBody.appendChild(deleteButton)
        // cardBody.appendChild(toggleButton)

        title.textContent = books.title
        author.textContent = 'by' + books.author
        totalPages.textContent = 'pages: ' + books.pages
        // if (books.read) {
        //     toggleButton.textContent = 'Read'
        //     toggleButton.classList.add('read')
        // } else {
        //     toggleButton.textContent = 'Not Read'
        //     toggleButton.classList.add('notRead')

        // }
    }
}









// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
// console.log(theHobbit.info());

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', "295", "false");
addBookToLibrary('The subtle Art of Not Giving a F*ck', 'Mark Manson', '209', 'true');
console.log(myLibrary)