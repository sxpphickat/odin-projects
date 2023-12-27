// @ts-check

/** 
 * represents a book
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {number} numberOfPages - The number of pages in the book.
 * @param {boolean} wasRead - Indicates if the book has been read.
 */
function Book(title, author, numberOfPages, wasRead) {
	this.title = title;
	this.author = author;
	this.numberOfPages = numberOfPages;
	this.wasRead = wasRead;
}

/** @type {Book[]} */
const myLibrary = [];

/**
 * Adds a book to the library.
 * @param {Book} book - Adds a book to the library
 */
function addBookToLibrary(book) {
	myLibrary.push(book);
}


/**
 * represents the form dialog, obtained by its ID.
 * @type {HTMLDialogElement | null}
 */
const formDialog = document.getElementById("formDialog");

/**
 * The button element used to open the dialog, obtained by its ID.
 * @type {HTMLElement | null}
 */
const openDialogButton = document.getElementById("openDialog");

/**
 * The button element used to close the dialog, obtained by its ID.
 * @type {HTMLElement | null}
 */
const closeDialogButton = document.getElementById("closeDialog");

/**
 * The button element used to submit the form, obtained by its ID.
 */
const submitFormButton = document.getElementById("submitForm");

openDialogButton?.addEventListener("click", () => {
	formDialog?.showModal(); // ver isso com o guz dps
});

function clearInputs() {
	const clearableInputs = document.querySelectorAll(".input");

	clearableInputs.forEach((input) => {
		if(input.type === "text" || input.type === "number") {
			input.value = '';
		} else if (input.type === "checkbox") {
			input.checked = false;
		}
	});
}

closeDialogButton?.addEventListener("click", () => {
	clearInputs();
	formDialog?.close();
});

submitFormButton?.addEventListener("click", () => {
	const name = document.querySelector("#bookName").value;
	const author = document.querySelector("#author").value;
	const numPages = document.querySelector("#numPages").value;
	const wasRead = document.querySelector("#wasRead").value;

	const newBook = new Book(name, author, numPages, wasRead);
	clearInputs();
	formDialog?.close();
	addBookToLibrary(newBook);
	console.log(myLibrary);
	updateScreen();
});

const display = document.querySelector("#display");

function updateScreen() {
	const book = document.createElement("div");

	book.appendChild = document.createElement("div").innerText = "asdf";

	display?.appendChild(book);
}