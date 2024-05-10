import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movieResults, setMovieResults] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Clear the previous timeout
    clearTimeout(timeoutId);

    // Set a new timeout for 1000ms
    const timeoutId = setTimeout(() => {
      fetchMovies(value);
    }, 1000);
  };

  const fetchMovies = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:8080/movies?q=${searchTerm}`);
      setMovieResults(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Movies"
        data-testid="search_key"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div data-testid="movie_results">
        {movieResults.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h3>Title: {movie.title}</h3>
            <p>Year: {movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
