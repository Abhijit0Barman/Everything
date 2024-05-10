// import React, { useState } from "react";
// import Star from "./Star";

// const StarRating = ({ rating }) => {
//   const [selectedRating, setSelectedRating] = useState(rating);

//   const handleStarClick = (selected) => {
//     setSelectedRating(selected);
//   };

//   return (
//     <>
//       {Array.from({ length: 5 }).map((_, index) => (
//         <Star
//           key={index}
//           isSelected={index < selectedRating}
//           onClick={() => handleStarClick(index + 1)}
//         />
//       ))}
//       <p>{`${selectedRating} of 5`}</p>
//     </>
//   );
// };

// export default StarRating;
import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ rating }) => {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleStarClick = (selected) => {
    setSelectedRating(selected);
  };

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          isSelected={index < selectedRating}
          onClick={() => handleStarClick(index + 1)}
        />
      ))}
      <p>{`${selectedRating} of 5`}</p>
    </>
  );
};

export default StarRating;
