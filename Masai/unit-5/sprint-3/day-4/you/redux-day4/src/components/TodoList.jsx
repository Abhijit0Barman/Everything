import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/todo/action";

export const TodoList = () => {
  const [render, setRender] = useState(true);
  const dispatch = useDispatch();
  // const tod = useSelector((s) => s.todo);

  //👇👇👇👇👇 "taking out from the store More then 1"
  const { tod, isLoading, isError } = useSelector((s) => {
    return {
      tod: s.todoReducer.todo,
      isLoading: s.todoReducer.isLoading,
      isError: s.todoReducer.isError,
    };
  }, shallowEqual);
  //👆👆👆👆👆

  useEffect(() => {
    getTodos(dispatch);
  }, [render]);

  // console.log(`re-render todos`, tod);

  return (
    <div>
      <h1>Add Todo</h1>
      <TodoInput setRender={setRender} />
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
