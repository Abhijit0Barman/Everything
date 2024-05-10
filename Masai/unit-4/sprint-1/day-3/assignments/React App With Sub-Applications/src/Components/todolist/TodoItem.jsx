import Button from '../common/button/Button';

function TodoItem({ id, title, status, handleToggle, handleDelete }) {
  return (
    <div data-testid="todo-item" className="wrapper">
      {/* Add the p tag, and required elements */}
      <p>{`${title} - ${status}`}</p>
      <div>
        {/* add the required buttons here using Button component */}
        <Button onClick={() => handleToggle(id)}>TOGGLE</Button>
        <Button onClick={() => handleDelete(id)}>DELETE</Button>
      </div>
    </div>
  );
}

export default TodoItem;
