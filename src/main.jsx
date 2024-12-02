import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

function fetchBooks() {
  // Retrieve all the books using fetch
  fetch("https://seussology.info/api/books")
    .then((response) => response.json())
    .then((json) => console.log("All books:", json));
}

function fetchBookById(bookId) {
  fetch(`https://seussology.info/api/books/${bookId}`)
    .then((response) => response.json())
    .then((json) => console.log("Book by ID:", json));
}

fetchBooks();
fetchBookById(1);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
