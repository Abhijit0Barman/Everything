import React, { useEffect } from "react";
import { TodoInput } from "./TodoInput";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { failure, getSuccess, request } from "../redux/action";

export const TodoList = () => {
  const dispatch = useDispatch();
  // const todos = useSelector((s) => s.todo);

  //👇👇👇👇👇 "taking out from the store More then 1"
  const { tod, isLoading, isError } = useSelector((s) => {
    return {
      tod: s.todo,
      isLoading: s.isLoading,
      isError: s.isError,
    };
  }, shallowEqual);
  //👆👆👆👆👆

  const getTodos = () => {
    dispatch(request());
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        dispatch(getSuccess(res.data));
      })
      .catch((err) => {
        dispatch(failure());
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(`re-render todos`, tod);

  return (
    <div>
      <h1>Add Todo</h1>
      <TodoInput />
      {isLoading && <p>Loading...</p>}
      {tod.length > 0 &&
        tod.map((item) => {
          return (
            <div key={item.id}>
              {`${item.title} -- ${item.status ? "True" : "False"}`}
            </div>
          );
        })}
    </div>
  );
};
