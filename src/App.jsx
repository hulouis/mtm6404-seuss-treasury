import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Books from "./Books";
import Quotes from "./Quotes";
import BookDetails from "./BookDetails";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/books")
      .then((response) => response.json())
      .then((json) => setBooks(json));
  }, []);

  return (
    <Router>
      <div className="main-container">
        {}
        <nav className="nav-container">
          <h3>Seuss Treasury</h3>
          <Link className="nav-item" to="/">
            Books
          </Link>
          <Link className="nav-item" to="/quotes">
            Quotes
          </Link>
        </nav>
        {}
        <Routes>
          <Route path="/" element={<Books books={books} />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/book/:id" element={<BookDetails books={books} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
