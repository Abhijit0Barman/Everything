import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTodoAction, getTodoErrorAction, getTodoLoadAction } from "../redux/todo/action";

import { useEffect, useState } from "react";
import axios from "axios";
import { TodoInput } from "./TodoInput";

export const TodoList = () => {
  const [render,setRender]=useState(false)
  const dispatch = useDispatch();
  const {todos,isError,isLoading} = useSelector((store)=>{
    return {
      todos:store.todoReducer.todos,
      isLoading:store.todoReducer.isLoading,
      isError:store.todoReducer.isError
    }
  },shallowEqual);

  const getTodo = () => {
    console.log("get data todos")
    dispatch(getTodoLoadAction())
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        dispatch(getTodoAction(res.data));
      })
      .catch((error) => {
        dispatch(getTodoErrorAction());
      });
  };

  useEffect(() => {
    getTodo();
  },[render]);
  return (
    <div>
      <h1>Readux-Todo</h1>
      <TodoInput setRender={setRender}/>
      {isLoading&& <h1>Loading...</h1>}
      {
       todos.length>0 && todos.map((el)=>{
           return <div key={el.id}>
            {el.title} -- {el.status?"True":"False"}
           </div>
        })
      }
     </div>
  );
};
