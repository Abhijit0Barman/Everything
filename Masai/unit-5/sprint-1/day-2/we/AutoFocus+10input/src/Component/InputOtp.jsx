import React, { useRef } from "react";
// import "./App.css";
function InputOtp() {
  //   const inputs = Array(5).fill(useRef());

  const inputs = Array.from({ length: 5 }, () => useRef());

  // let  inputs =Array(5).fill(useRef(null))

  const handleInput = (index, event) => {
    if (event.target.value.length >= 10) {
      // console.log(index+1,event.target.value)
      if (index < inputs.length - 1) {
        inputs[index + 1].current.focus();
        // console.log(inputs[index+1].current.focus())
      }
    }
  };
  console.log(inputs[1]);
  return (
    <>
      <div className="InputOtp">
        <form>
          {inputs.map((item, index) => (
            <input
              key={index}
              ref={item}
              type="text"
              maxLength="10"
              autoFocus={index === 0}
              onChange={(e) => handleInput(index, e)}
            />
          ))}
        </form>
      </div>
    </>
  );
}

export default InputOtp;