import { useState } from "react";

function AddTodo({ postRequest }) {
  const [inputValue, setInputValue] = useState("");

  const handleInp = () => {
    const body = {
      title: inputValue,
      status: false,
    };
    postRequest(body);
    setInputValue("");
  };
  return (
    <div data-testid="add-todo">
      {/* Add input tag and a button */}
      <input
        key="inputval"
        type="text"
        placeholder="Add a new todo "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleInp}>ADD TODO</button>
    </div>
  );
}

export default AddTodo;
