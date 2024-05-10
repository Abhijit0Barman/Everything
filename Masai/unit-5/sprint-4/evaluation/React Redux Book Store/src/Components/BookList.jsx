import { BookCard } from "./BookCard";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/BookReducer/action";
import { BookCard } from "./BookCard";
import { useLocation, useSearchParams } from "react-router-dom";

export const BookList = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((s) => s.bookReducer);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const paramObj = {
    params: {
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "release_year",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getBooks(paramObj));
  }, [location.search]);

  return (
    <div
      data-testid="book-list"
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4,300px)",
        justifyContent: "space-between",
        gap: "40px",
        border: "2px solid red",
        padding: "10px",
      }}>
      {/* Map through books using BookCard component */}
      {books.length > 0 &&
        books.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  );
};
