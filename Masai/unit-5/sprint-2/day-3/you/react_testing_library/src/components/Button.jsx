import React from "react";

export const Button = ({ children, func }) => {
  return (
    <button data-testid="test-button" onClick={func}>
      {children}
    </button>
  );
};
