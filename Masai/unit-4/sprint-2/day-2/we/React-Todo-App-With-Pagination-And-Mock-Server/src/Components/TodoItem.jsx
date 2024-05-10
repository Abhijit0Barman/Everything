function TodoItem({ title, status, id, deletTodos, putRequest }) {

  const handleToggle = () => {
    const body = {
      title: title,
      status: !status,
    }
    putRequest(id, body)
  }
  return (
    <div data-testid="todo-item">

      <p>{title}</p>
      <p style={{ color: status ? "green" : "red" }}>{status ? "Completed" : "Not Completed"}</p>
      <button onClick={handleToggle}>TOGGLE</button>
      <button onClick={() => deletTodos(id)}>DELETE</button>
    </div>
  );
}

export default TodoItem;
