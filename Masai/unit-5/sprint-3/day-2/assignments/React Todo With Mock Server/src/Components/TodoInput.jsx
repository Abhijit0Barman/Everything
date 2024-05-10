import React, { useState } from "react";
import axios from "axios";

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task) {
      axios
        .post(
          `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,
          { title: task, status: false }
        )
        .then((response) => {
          addTask(response.data);
          setTask("");
        })
        .catch((error) => {
          console.error("Error adding task:", error);
        });
    }
  };

  return (
    <div>
      <input
        data-testid="todo-input"
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="add todo here.."
      />
      <button data-testid="add-button" onClick={handleAddTask}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
