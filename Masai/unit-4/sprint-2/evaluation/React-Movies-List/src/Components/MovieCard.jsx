import React from "react";

const MovieCard = ({ id, title, year, imdbID, type, rating, poster }) => {
  return <div data-testid="movie-card">
    <img src={poster} alt="" />
    <h2>{title}</h2>
    <h4>Year: {year}</h4>
    <h6>ID: {imdbID}</h6>
    <p>Type: {type}</p>
    <p>Rating: {rating}</p>
  </div>;
};

export default MovieCard;