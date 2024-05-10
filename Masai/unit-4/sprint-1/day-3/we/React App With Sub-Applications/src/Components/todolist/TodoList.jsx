import React, { useState } from "react"
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import Container from "../common/container/Container";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (inputValue) => {
    const obj = {
      id: Math.random() + Date.now(),
      title: inputValue,
      status: false
    }
    setTodos([...todos, obj])
  };

  const handleUpdate = (id) => {
    let update = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(update);
  };

  const handleDelete = (id) => {
    let update = todos.filter((todo) => todo.id !== id)
    setTodos(update)
  };




  return (
    // <div style={{ textAlign: "center" }}>
    <Container>
      {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
      <h1>Todo List</h1>
      {/* Add AddTodo component here */}
      <AddTodo handleAdd={handleAdd} />
      <ul style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        {/* map all the todo's here with the help of TodoItem component */}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id} {...todo}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))
        }
      </ul>
    </Container>
    // </div>
  );

}
export default TodoList;
