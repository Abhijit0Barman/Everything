import styles from "./TodoItem.module.css"
import Button from "../common/button/Button";

function TodoItem({ handleUpdate, handleDelete, id, title, status }) {
  return (
    <div data-testid="todo-item" className={styles.wrapper}>
      {/* Add the p tag, and required elements */}
      <p>{`${title} - ${status ? "Completed" : "Not Completed"}`}</p>

      <div>{/* add the required buttons here using Button component */}
        <Button handle={() => handleUpdate(id)}>TOGGLE</Button>
        <Button handle={() => handleDelete(id)}>DELETE</Button>
      </div>
    </div>
  );
}

export default TodoItem;
