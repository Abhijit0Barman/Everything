import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { editBook } from "../Redux/BookReducer/action";

const initialData = {
  no_of_chapters: 0,
  author: "",
  book_name: "",
};

export const EditBook = () => {
  const books = useSelector((s) => s.bookReducer.books);
  const [book, setBook] = useState(initialData);

  const { id } = useParams();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: name === "no_of_chapters" ? +value : value });
  };

  const handleUpdate = (e) => {
    dispatch(editBook(id, book));
  };

  useEffect(() => {
    const data = books.find((el) => el.id === +id);
    setBook(data);
  }, []);

  return (
    <DIV>
      <h1 data-testid="book-id">Edit Book ID: </h1>
      <input
        type="text"
        placeholder="Name"
        data-testid="book-name"
        name="book_name"
        value={book.book_name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Author"
        data-testid="book-author"
        name="author"
        value={book.author}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Number of Chapter"
        data-testid="book-chapter"
        value={book.no_of_chapters}
        onChange={handleChange}
        name="no_of_chapters"
      />
      <button data-testid="update-book" onClick={handleUpdate}>
        Update
      </button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
