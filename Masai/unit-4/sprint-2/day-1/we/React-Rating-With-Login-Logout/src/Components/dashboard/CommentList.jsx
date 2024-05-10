import React from 'react';
import Comment from './Comment';

const CommentList = ({ ratings, onRatingChange, onRatingDelete }) => {
  return (
    <div>
      {ratings.map((rating, index) => (
        <Comment key={index} rating={rating} onRatingChange={(newRating) => onRatingChange(index, newRating)} onRatingDelete={() => onRatingDelete(index)} />
      ))}
    </div>
  );
};

export default CommentList;
