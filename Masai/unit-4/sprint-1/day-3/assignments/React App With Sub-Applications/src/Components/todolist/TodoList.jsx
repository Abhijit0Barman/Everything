import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

// import Container from "../common/container/Container";
// import Button from "../common/button/Button";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newItem = {
      id: new Date().toDateString() + text,
      title: text,
      status: false,
    };
    setTodos([...todos, newItem]);
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            status: todo.status === "Completed" ? "Not Completed" : "Completed",
          }
        : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
      <h1>Todo List</h1>
      {/* Add AddTodo component here */}
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul>
        {/* map all the todo's here with the help of TodoItem component */}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo}
            title={todo.title}
            status={todo.status}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
}



//   return (
//     <Container>
//       <h1>Todo List</h1>
//       <AddTodo addTodo={addTodo} />
//       <ul>
        
//       </ul>
//     </Container>
//   );
// };

export default TodoList;
