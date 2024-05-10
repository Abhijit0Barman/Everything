import { FaTrash } from "react-icons/fa";
import React from 'react';
import StarRating from './StarRating';

const Comment = ({ rating, onRatingChange, onRatingDelete }) => {
  return (
    <div className="ratingcard">
      <h1 style={{ color: rating.color }}>{rating.title}</h1>
      <StarRating rating={rating.rating} onRatingChange={onRatingChange} />
      <FaTrash onClick={onRatingDelete} data-icon="trash" />
    </div>
  );
};

export default Comment;
