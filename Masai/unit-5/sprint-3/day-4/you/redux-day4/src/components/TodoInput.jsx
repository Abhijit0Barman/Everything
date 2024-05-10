import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo/action";

export const TodoInput = ({ setRender }) => {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    addTodo(dispatch, title, setRender);
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo Input"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};
