import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('/api/todos'); // Assuming the API endpoint for fetching todos is '/api/todos'
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (newTodo) => {
    try {
      const response = await axios.post('/api/todos', newTodo); // Assuming the API endpoint for adding a new todo is '/api/todos'
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div data-testid="todos-wrapper">
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.title} - {todo.status.toString()}
        </div>
      ))}
    </div>
  );
};

export default Todo;
