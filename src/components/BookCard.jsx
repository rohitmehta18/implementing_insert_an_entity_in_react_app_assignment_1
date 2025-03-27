import React from "react";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} className="book-cover" />
      <div className="book-details">
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default BookCard;