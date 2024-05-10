import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoInput from "./TodoInput";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    // Make a GET request to fetch initial todos
    axios
      .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, [render]);

  const addTask = (newTask) => {
    // setTodos([...todos, newTask]);
    setRender(!render);
  };

  return (
    <div>
      <TodoInput addTask={addTask} />
      <div data-testid="todos-wrapper">
        {todos.map((todo) => (
          <h2 key={todo.id}>
            {todo.title} - {todo.status ? "True" : "False"}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Todos;
