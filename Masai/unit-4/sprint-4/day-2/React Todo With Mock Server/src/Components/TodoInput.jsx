import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      const newTodo = {
        title: task,
        status: false,
      };
      addTodo(newTodo);
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        data-testid="todo-input"
        value={task}
        onChange={handleInputChange}
      />
      <button data-testid="add-button" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
