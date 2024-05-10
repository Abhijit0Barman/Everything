import React from "react";
import { newTodo } from "./Add";

function Todo({ title, description, status, handleToggle }: newTodo) {
  return (
    <div data-testid="todo-container">
      <h2 data-testid="todo-title">{/* Title should come here  */}{title}</h2>
      <p data-testid="todo-desc">{/* Description should come here  */}{description}</p>
      {/* Based on the status value below checkbox will be checked/unchecked  */}
      <input data-testid="todo-status" type="checkbox" checked={status}
        onChange={handleToggle} />
    </div>
  );
}

export default Todo;
