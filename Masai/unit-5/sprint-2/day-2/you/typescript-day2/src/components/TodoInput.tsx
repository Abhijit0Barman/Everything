import React, { useState } from "react";
import { Todo } from "../constants";
import { addTodo } from "../api";

interface TodoInputProps {/*   
    // handleUpdate: () => void  //for multiple user    //this is not taking or passing anything, thats why "void"
    its similar to type but no need "(=) equal-to"
    interface we can only use for objects, 
    Not for primitive data-types
    */
    handleUpdate: (res: Todo) => void;  /*  but this is taking value as a parameter,
    so also have to give "type" of that value-parameter and return nothing so "void"  */
}


export const TodoInput = ({ handleUpdate }: TodoInputProps) => {
    const [title, setTitle] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //adding "type" from (constants.ts) after importing
        const newTodo: Todo = {
            title,
            status: false,
        };

        addTodo(newTodo) //calling post_request from (api.ts) after importing
            .then((res) => {
                // handleUpdate();  
                /* this is for (Multiple-User)
                handleUpdate()  will get (call/trigger) only after successful post-request, 
                then return response will trigger the function  */
                handleUpdate(res); /*
                in this case, after getting response back which is post-request Data,
                then I am passing the data as a parameter with handleUpdate(res) function
                */
            });
        setTitle("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={title} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};
