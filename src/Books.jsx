import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BookList() {
  const [bookData, updateBookData] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/books")
      .then((res) => res.json())
      .then((data) => {
        updateBookData(data);
      })
      .catch((err) => {
        console.error("Error occurred while fetching books:", err);
      });
  }, []);

  return (
    <div className="books-container">
      {bookData.map((item) => (
        <div key={item.id} className="book">
          <Link to={`/book/${item.id}`}>
            <img className="book-img" src={item.image} alt={item.title} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BookList;
