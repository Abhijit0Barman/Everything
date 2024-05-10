import React, { useRef } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const Pin = ({ maxChar = 1, length, setOtp }) => {
  const [inputLength] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  const handlePaste = (e) => {
    let data = e.clipboardData.getData("Number");
    data = data
      .trim()
      .split("")
      .filter((elem, index) => index < length);

    data.forEach((el, index) => {
      inputRef.current[index].value = el;
    });
  };

  const handleInput = (e, index) => {
    const { value } = e.target;
    if (value.length === maxChar && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setOtp((p) => {
      return Number("" + p + value);
    });
  };

  const handleBackspace = (e, index) => {
    const { value } = e.target;
    if (value.length === 0 && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  const handleKey = (event, index) => {
    console.log(event);
    if (event.keyCode === 8) {
      handleBackspace(event, index);
    } else {
      handleInput(event, index);
    }
  };
  return (
    <>
      <div onPaste={handlePaste}>
        {inputLength.map((el, index) => {
          return (
            <input
              data-testid="pin-input"
              key={index}
              ref={(e) => (inputRef.current[index] = e)}
              onKeyUp={(event) => handleKey(event, index)}
              maxLength={maxChar}
              required
            />
          );
        })}
      </div>
    </>
  );
};

// Check maxChar prop here
Pin.propTypes = {
  maxChar: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  setOtp: PropTypes.func.isRequired,
};
