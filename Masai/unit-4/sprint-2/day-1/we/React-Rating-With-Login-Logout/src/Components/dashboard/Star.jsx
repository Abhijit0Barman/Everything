import React from 'react';
import { FaStar } from "react-icons/fa";

const Star = ({ isFilled, onClick }) => {
  return <FaStar onClick={onClick} data-icon="star" />
};

export default Star;


  // {isFilled ? 'Filled Star' : 'Empty Star'}
