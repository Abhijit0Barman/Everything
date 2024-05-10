import React from 'react';

function TodoItem({ todo, updateTodoStatus, deleteTodo }) {
  const handleToggleStatus = () => {
    updateTodoStatus(todo.id, todo.status);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div data-testid="todo-item">
      <p>{todo.title}</p>
      <p>{todo.status ? 'Completed' : 'Not Completed'}</p>
      <button onClick={handleToggleStatus}>TOGGLE</button>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default TodoItem;
