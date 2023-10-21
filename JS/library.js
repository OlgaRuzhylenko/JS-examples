import {books} from './data.js'

const root = document.querySelector("#root");
const firstDiv = document.createElement("div");
firstDiv.classList.add("leftDiv");
const secondDiv = document.createElement("div");
secondDiv.classList.add("rightDiv");

root.append(firstDiv, secondDiv);

const title = document.createElement("h1");
title.textContent = "Library";
const list = document.createElement("ul");
const addButton = document.createElement("button");
addButton.textContent = "Add book";
firstDiv.append(title, list, addButton);

addButton.addEventListener("click", addBook);

function renderList() {
  const markup = books
    .map(({ title, id }) => {
      return `<li id="${id}">
        <p class="book-title">${title}</p>
        <button class="delete">Delete</button>
        <button class="edit">Edit</button>
        </li>`;
    })
    .join("");
  //    list.insertAdjacentHTML('afterbegin', markup)
  list.innerHTML = markup;
//   const titles = document.querySelectorAll(".book-title");
//   titles.forEach((title) => title.addEventListener("click", renderPreview));
//   const deleteBtns = document.querySelectorAll(".delete");
//   deleteBtns.forEach((btn) => btn.addEventListener("click", deleteBook));
}
list.addEventListener('click', handleClick)

function handleClick ({target}) {
if (target.nodeName === 'P') {
    renderPreview(target)
} else if (target.classList.contains('delete')) {
    deleteBook(target)
} else if (target.classList.contains('edit')) {
editBook(target)
} else {
  return
}
}

renderList();

function renderPreview(target) {
  const bookTitle = target.textContent;
  const book = books.find(({ title }) => title === bookTitle);
  console.log(book);
  const markup = createPreviewMarkup(book);
  secondDiv.innerHTML = "";
  secondDiv.insertAdjacentHTML("afterbegin", markup);
}

function createPreviewMarkup({ id, title, author, img, plot }) {
  return `<div data-id="${id}" class="book-info">
<h2>${title}</h2>
<p>${author}</p>
<img src="${img}" alt="${title}">
<p>${plot}</p>
</div>`;
}

function deleteBook(target) {
  const bookId = target.parentNode.id;
  books = books.filter(({ id }) => id !== bookId);
  renderList();
  const bookInfo = document.querySelector(".book-info");

  if (bookInfo && bookInfo.dataset.id === bookId) {
    secondDiv.innerHTML = "";
  }
}

function addBook() {
  const markup = createFormMarkup();
  secondDiv.innerHTML = markup;
  const newBook = {
    id: Date.now(),
    title: "",
    author: "",
    img: "",
    plot: "",
  };
  fillObject(newBook);
  const form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(newBook);
    books.push(newBook)
    renderList();
    const markup = createPreviewMarkup(newBook);
    secondDiv.innerHTML = "";
  secondDiv.insertAdjacentHTML("afterbegin", markup);
  })
}

function createFormMarkup({title="", author="", img="", plot=""} = {}) {
  return `
    <form>
    <label>Title: <input type="text" name="title" value="${title}"> </label>
    <label>Author: <input type="text" name="author" value="${author}"> </label>
    <label>Image: <input type="url" name="img" value="${img}"> </label>
    <label>Plot: <input type="text" name="plot" value="${plot}"> </label>
    <button>Save</button>
    </form>
    `;
}

function fillObject(book) {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => input.addEventListener('change', () => {
book[event.target.name] = event.target.value
  }))
}

function editBook(target) {
  const bookId = target.parentNode.id;
  const book = books.find(({ id }) => id === bookId);
  console.log(book);
  secondDiv.innerHTML = createFormMarkup(book);
  fillObject(book);
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(book);
const index = books.findIndex(({id}) => id === bookId)
books[index] = book;
    renderList();
    const markup = createPreviewMarkup(newBook);
    secondDiv.innerHTML = "";
  secondDiv.insertAdjacentHTML("afterbegin", markup);
  })
}