import React, { useState } from "react";
import Button from "../common/button/Button";

function AddTodo({ handleAddTodo }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    handleAddTodo(text);
    setText("");
  };

  return (
    <div>
      {/* Add a input tag here and a button to "ADD" with the help of `Button` component */}
      <input value={text} type="text" onChange={handleChange} />
      <button onClick={onClick}>ADD</button>
    </div>
  );
}

export default AddTodo;
