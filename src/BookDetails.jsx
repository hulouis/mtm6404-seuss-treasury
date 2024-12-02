import React from "react";
import { useParams } from "react-router-dom";

/**
 * Custom hook to fetch book details by ID.
 */
function useBookDetails(books) {
  const { id } = useParams();
  return books.find((book) => book.id.toString() === id);
}

function BookDetails({ books }) {
  const book = useBookDetails(books);

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div>
      <Header title="Seuss Treasury" />
      <BookInfo book={book} />
    </div>
  );
}

/**
 * Component to render the page header.
 */
function Header({ title }) {
  return <h1 className="main-title">{title}</h1>;
}

/**
 * Component to render book details.
 */
function BookInfo({ book }) {
  return (
    <div className="book-details-container">
      <img className="book-image" src={book.image} alt={book.title} />
      <div className="book-info">
        <h2 className="book-title">{book.title}</h2>
        <p className="book-description">{book.description}</p>
        <p className="book-publish-date">
          Year Published: {book.year_published}
        </p>
      </div>
    </div>
  );
}

export default BookDetails;
