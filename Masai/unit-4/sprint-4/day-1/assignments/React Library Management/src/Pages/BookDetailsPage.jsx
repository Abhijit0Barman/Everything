
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Price: ${book.price}</p>
      <p>Section: {book.section}</p>
      <p>ISBN: {book.isbn}</p>
    </div>
  );
};

export default BookDetailsPage;
