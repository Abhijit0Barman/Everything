import React from "react";
import "./Input.css";
import PropTypes from "prop-types";

const Input = ({ type = "text", size = "md", variant, value, onChange }) => {
  return (
    <input
      data-testid="inputTag"
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${size} ${variant}`}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["outline", "filled", "flushed"]).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
