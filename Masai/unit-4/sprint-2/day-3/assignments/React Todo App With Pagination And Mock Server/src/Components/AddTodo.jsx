import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() !== '') {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <div data-testid="add-todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button type="submit">ADD TODO</button>
      </form>
    </div>
  );
}

export default AddTodo;
