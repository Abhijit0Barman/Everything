
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/books')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <Link to={`/bookdetailspage/${book.id}`}>
            <h3>{book.title}</h3>
          </Link>
          <p>Author: {book.author}</p>
          <p>Price: ${book.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
