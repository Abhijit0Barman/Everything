import React from 'react';
import Star from './Star';

const StarRating = ({ rating, onRatingChange }) => {
  const handleStarClick = (newRating) => {
    onRatingChange(newRating);
  };

  return (
    <> {/* Add stars here with the help of Star component */}
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} isFilled={index < rating} onClick={() => handleStarClick(index + 1)} />
      ))}
      {/* add p tag here in this format {selectedStars} of {totalStars} like 1 of 5*/}
      <p>{`${rating} of 5`}</p>
    </>
  );
};

export default StarRating;
