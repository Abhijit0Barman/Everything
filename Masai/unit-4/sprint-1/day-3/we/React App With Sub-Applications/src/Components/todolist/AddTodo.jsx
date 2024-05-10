import styles from "./AddTodo.module.css"
import Button from "../common/button/Button";
import { useState } from "react";

function AddTodo({ handleAdd }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      {/* Add a input tag here and a button to "ADD" with the help of `Button` component */}
      <input id="inp" name="Task-Input"
        type="text"
        className={styles.input}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Add a new todo"
      />
      <Button handle={() => {
          handleAdd(inputValue);
          setInputValue("");
        }
      }>
        ADD
      </Button>
    </div >
  );
}
export default AddTodo;
