// import React from "react";
// import { FaTrash } from "react-icons/fa";
// import StarRating from "./StarRating";

// const Comment = ({ title, color, rating }) => {
//   const handleDelete = () => {
//     // Implement the delete functionality here
//     console.log("Delete comment");
//   };

//   return (
//     <div className="ratingcard">
//       <h1 style={{ color }}>{title}</h1>
//       <StarRating rating={rating} />
//       <FaTrash data-icon="trash" onClick={handleDelete} />
//     </div>
//   );
// };

// export default Comment;


import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";

const Comment = ({ title, color, rating, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="ratingcard">
      <h1 style={{ color }}>{title}</h1>
      <StarRating rating={rating} />
      <FaTrash data-icon="trash" onClick={handleDelete} />
    </div>
  );
};

export default Comment;
