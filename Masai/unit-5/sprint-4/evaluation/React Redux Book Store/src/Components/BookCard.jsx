import React from "react";
import { useNavigate } from "react-router-dom";

export const BookCard = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div className="book-card" style={{ border: "1px solid black" }}>
      {/* ``` - Show Image in image tag with class `book-image` - Show Book name
      with class `book-name` - Show Author with class `book-author` - Show
      Category with class `book-category` - Show Release year with class
      `book-year` - Show Number of chapters with class `book-chapter` * Do not
      add any extra text, See the Image provided to know what needs to be
      displayed * ``` */}
      <img
        src={book.cover_photo}
        alt={book.book_name}
        width={"150px"}
        height="200px"
        className="book-image"
      />
      <p className="book-name">{book.book_name}</p>
      <p className="book-author">{book.author}</p>
      <p className="book-category">{book.category}</p>
      <p className="book-year">{book.release_year}</p>
      <p className="book-chapter">{book.no_of_chapters}</p>
      <button
        onClick={() => navigate(`/edit-book/${book.id}`)}
        className="edit-book"
        //data-testid={`edit-book-${book.id}`}
      >
        Edit
      </button>
    </div>
  );
};
