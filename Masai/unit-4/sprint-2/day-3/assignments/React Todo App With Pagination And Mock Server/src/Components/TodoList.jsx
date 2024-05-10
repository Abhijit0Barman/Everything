import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import Pagination from './Pagination';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(3);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8000/todos?_limit=${todosPerPage}&_page=${currentPage}`);
      const data = await response.json();
      setTodos(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const addTodo = async (title) => {
    try {
      const response = await fetch('http://localhost:8000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, status: false }),
      });
      const data = await response.json();
      setTodos([...todos, data]);
    } catch (error) {
      setError(true);
    }
  };

  const updateTodoStatus = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: !status }),
      });
      const data = await response.json();
      const updatedTodos = todos.map((todo) => (todo.id === id ? data : todo));
      setTodos(updatedTodos);
    } catch (error) {
      setError(true);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:8000/todos/${id}`, {
        method: 'DELETE',
      });
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      setError(true);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTodosPerPageChange = (event) => {
    setTodosPerPage(parseInt(event.target.value));
  };

  if (loading) {
    return <h1 data-testid="loading">Loading...</h1>;
  }

  if (error) {
    return <h1 data-testid="err">Something went wrong..</h1>;
  }

  return (
    <>
      <select onChange={handleTodosPerPageChange} defaultValue={todosPerPage}>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
      </select>
      <AddTodo addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodoStatus={updateTodoStatus}
          deleteTodo={deleteTodo}
        />
      ))}
      <Pagination
        currentPage={currentPage}
        todosPerPage={todosPerPage}
        totalTodos={todos.length}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default TodoList;
