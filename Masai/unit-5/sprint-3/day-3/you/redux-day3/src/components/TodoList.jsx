import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { failure, getSuccess, request } from "../redux/todo/action";

export const TodoList = () => {
  const [render,setRender]=useState(true)
  const [page, setPage] = useState(1);
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

  const getTodos = (paramObj) => {
    dispatch(request());
    axios
      .get("http://localhost:8080/todos", paramObj)
      .then((res) => {
        dispatch(getSuccess(res.data));
      })
      .catch((err) => {
        dispatch(failure());
      });
  };

  useEffect(() => {
    const paramObj = {
      params: {
        _page: page,
        _limit: 2,
      },
    };
    getTodos(paramObj);
  }, [page,render]);

  const paginate = (pageNo) => {
    setPage(pageNo);
  };

  // console.log(`re-render todos`, tod);

  return (
    <div>
      <h1>Add Todo</h1>
      <TodoInput setRender={setRender}/>
      {isLoading && <p>Loading...</p>}
      {tod.length > 0 &&
        tod.map((item) => {
          return (
            <div key={item.id}>
              {`${item.title} -- ${item.status ? "True" : "False"}`}
            </div>
          );
        })}
      <div>
        <button onClick={()=>paginate(1)}>1</button>
        <button onClick={()=>paginate(2)}>2</button>
        <button onClick={()=>paginate(3)}>3</button>
        <button onClick={()=>paginate(4)}>4</button>
      </div>
    </div>
  );
};
