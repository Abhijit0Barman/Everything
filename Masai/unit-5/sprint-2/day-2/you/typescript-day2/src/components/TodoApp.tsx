import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import { Todo } from "../constants";
import { getTodo } from "../api";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]); //adding type"<Todo[]>" from->constants.ts
  // const [trigger, setTrigger] = useState<boolean>(false); //adding a type "<boolean>"    //for multiple user

  useEffect(() => {
    getTodo() //calling get-request from (api.ts) and returning a promise
      .then((res) => {
        // getting res.data which is returned from the getTodo() -> (api.ts)
        setTodos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  /* }, [trigger]);   //for multiple user
  //it will cz re-render after post request by using handleUpdate function

  const handleUpdate = () => { //this function pass to the component, where is "input taking"   //for multiple user
    setTrigger(prev => !prev)  //only toggle the value for causing Re-Render
  }
  */

  const handleUpdate = (newTodo: Todo) => {
    /*
    after passing the function, wherever the calling this function, it will take object as a parameter which is new post-request Data,    
    thats why we also have to give, type of the data by importing from (constants.ts)
    in this case we are not calling/triggr the get-request,
    instead,
    we are updating the state with the new data,
    like (...spreading old-data,new-data) this
    setTodos((prev) => {
      return [...prev, newTodo]
    });
    OR
    down below in 1 line. */
    setTodos((prev) => [...prev, newTodo]); //adding data manually rather then getRequest
  };

  const handleStatusUpdate = (res: Todo) => {    //⭐⭐⭐⭐
    setTodos((prev) => {
      return prev.map((el) => (el.id === res.id ? res : el));
      //COMPARING (PREV-ELEMENT.ID VS UPDATED-RESPONSE.ID)
    });
  };
  /*
const handleStatusUpdate = (id: number) => {              //⭐⭐⭐⭐
    setTodos((prev) => {
      return prev.map((el) => (el.id === id ? {...el, status: !el.status} : el));
    })
  }
  */

  // delete-request in response only give you Empty-Object.
  // So thats why you have to use id & filter
  const handleDeleteUpdate = (x: number) => {    //⭐⭐⭐⭐
    setTodos((prev) => {
      return prev.filter((el) => el.id !== x);
    });
  };

  return (
    <div>
      {/* 
      it will show error after passing the handle function, 
      Un-till you de-structure in input taking component, 
      you also have to give the interface, 
      by creating interface with return type in this case "void",
      cz this 1ST TYPE "Not taking parameter nor returning anything".
      */}
      <TodoInput handleUpdate={handleUpdate} />
      {todos?.map((item) => (
        // <TodoItem {...item} key={item.id} />
        <TodoItem
          {...item}
          key={item.id}
          handleStatusUpdate={handleStatusUpdate}
          handleDeleteUpdate={handleDeleteUpdate}
        />
      ))}
    </div>
  );
};

export default TodoApp;
