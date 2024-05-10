import React, { useState } from 'react';
import CommentList from './CommentList';
const data = [
  {
    id: 1,
    title: "Very Poor",
    color: "red",
    rating: 1,
  },
  {
    id: 2,
    title: "Poor",
    color: "yellow",
    rating: 2,
  },
  {
    id: 3,
    title: "good",
    color: "orange",
    rating: 3,
  },
  {
    id: 4,
    title: "Very Good",
    color: "lightgreen",
    rating: 4,
  },
  {
    id: 5,
    title: "Excellent",
    color: "green",
    rating: 5,
  },
];

const Dashboard = ({ onLogout }) => {
  const [ratings, setRatings] = useState(data);

  const handleRatingChange = (ratingIndex, newRating) => {
    setRatings((prevRatings) =>
      prevRatings.map((rating, index) => (index === ratingIndex ? { ...rating, rating: newRating } : rating))
    );
  };

  const handleRatingDelete = (ratingIndex) => {
    setRatings((prevRatings) => prevRatings.filter((_, index) => index !== ratingIndex));
  };

  return (
    <div className="dashboard">
      <h1>Rating - App</h1>
      <button onClick={onLogout}>Logout</button>
      <CommentList
        ratings={ratings}
        onRatingChange={handleRatingChange}
        onRatingDelete={handleRatingDelete}
      />
    </div>
  );
};

export default Dashboard;
