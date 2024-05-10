import React, { useState, useRef } from 'react';

function TodosApp() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef(null);

  const handleTodoChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, todo]);
    setTodo('');
  };

  return (
    <div>
      <h1>Todos</h1>
      <input
        className="todo-input"
        type="text"
        placeholder="Add a new todo"
        value={todo}
        onChange={handleTodoChange}
        ref={todoInputRef}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodosApp;
