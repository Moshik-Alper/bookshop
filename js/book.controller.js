'use strict'

function onInit() {
    renderBookList()
}

function renderBookList() {
    const elBookList = document.querySelector('.book-list')
    const strHtml = getBooks().map(book => `
           <tr>
                <th scope="row">${book.title}</th>
                <td>${book.price}</td>
                <td>
                    <button onclick="onReadBook('${book.id}')" class="read">Read</button>
                    <button onclick="onUpdateBook('${book.id}')" class="update">Update</button>
                    <button onclick="onDeleteBook('${book.id}')" class="delete">Delete</button>
                </td>
            </tr>
        `)
    elBookList.innerHTML = strHtml.join('')
}

function onReadBook(bookId) {
    console.log(bookId)
}

function onUpdateBook(bookId) {
    console.log(bookId)
}

function onDeleteBook(bookId) {
    console.log(bookId)
}