
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SectionPage = () => {
  const { section } = useParams();
  const [sectionBooks, setSectionBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/books?section=${section}`)
      .then((response) => response.json())
      .then((data) => setSectionBooks(data));
  }, [section]);

  return (
    <div>
      {sectionBooks.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Price: ${book.price}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionPage;
