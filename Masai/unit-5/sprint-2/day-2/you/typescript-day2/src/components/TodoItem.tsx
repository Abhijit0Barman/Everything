import React from "react";
import { Todo } from "../constants";
import { toggleTodo } from "../api";
import { deleteTodoById } from "../api";

interface TodoProps extends Todo {
  //we can inherit property from different "types" using "extends"
  handleStatusUpdate: (parameter: Todo) => void;
  handleDeleteUpdate: (x: number) => void;
}

// const TodoItem = ({ id, title, status }: Todo) => {//here-also adding type from (constants.ts)
const TodoItem = ({
  id,
  title,
  status,
  handleStatusUpdate,
  handleDeleteUpdate,
}: TodoProps) => {
  /* taking 1more parameter which is not present in "type" Todo from (constants.ts), 
  thats why creating a new "interface" by inheriting old "type" */

  const handleTogggle = () => {
    /* if (id) {
        toggleTodo(id, !status);
      }
    */

    toggleTodo(!status, id) //PATCH-REQUEST
      .then((res) => {
        // after getting response, it will trigger
        handleStatusUpdate(res);
      });
  };

  const handleDelete = () => {
    /* if (id) {
        deleteTodoById(id);
      }
    */

    deleteTodoById(id) //DELETE-REQUEST
      .then((res) => {
        // after getting response, it will trigger
        // console.log(res);//200

        if (res === 200) {
          if (id) {
            handleDeleteUpdate(id);
            // console.log(`delete s`);
          }
        }
      });
  };

  return (
    <div>
      <h3>
        {title} -- status: {status ? "True" : "False"}
      </h3>
      <button onClick={handleTogggle}>TOGGLE</button>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
};

export default TodoItem;
