import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { failure, postSuccess, request } from "../redux/todo/action";

export const TodoInput = ({ setRender }) => {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    addTodo();
    setTitle("");
  };

  const addTodo = () => {
    dispatch(request());
    axios
      .post("http://localhost:8080/todos", { title: title, status: false })
      .then((res) => {
        dispatch(postSuccess(res.data));
        setRender((p) => !p); //⭐⭐in pagination single-user not work. you have to use multi-user approach(which is "after post-request -> make get-request")
      })
      .catch((err) => {
        dispatch(failure());
      });
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
