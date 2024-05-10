import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ isSelected, onClick }) => {
  return <FaStar data-icon="star" color={isSelected ? "yellow" : "grey"} onClick={onClick} />;
};

export default Star;

