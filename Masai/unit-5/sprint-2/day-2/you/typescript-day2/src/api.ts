import axios from "axios";
import { Todo } from "./constants";
/*
    NO MATTER WHAT YOU ARE RETURNING.
    IF IT'S ASYNC THEN.
    IT'S WILL ALL-WAYS RETURN PROMISE.
*/
const URL = "http://localhost:8080/todos";

export const addTodo = async (newTodo: Todo) => {
    //POST-REQUEST
    let res = await axios.post(`${URL}`, newTodo);
    // console.log(res.data);
    return res.data;
};

export const getTodo = async () => {
    //GET-REQUEST
    let res = await axios.get(`${URL}`);
    return res.data;
};

// export const toggleTodo = async (id: number, status: boolean) => {    //PATCH-REQUEST
//     let res = await axios.patch(`${URL}/${id}`, { status: status })
// }

export const toggleTodo = async (status: boolean, id?: number) => {
    //PATCH-REQUEST
    //PATCH-REQUEST
    /*IF YOU ARE TAKING OPTIONAL PARAMETER-> "TAKE IT AT LAST" 
        to avoid confusion which value going which parameter. 
        By doing last as a optional parameter, we can say "what ever value we are passing, 
        it will take value in parameter by following order and 
        at-last if we pass that optional value, it will take the value, 
        and if we don't pass the last value. it will not take the last value"*/
    let res = await axios.patch(`${URL}/${id}`, { status: status });
    // console.log(res.data);
    return res.data;
};

export const deleteTodoById = async (id?: number) => {        //DELETE-REQUEST
    try {
        let res = await axios.delete(`${URL}/${id}`);
        // console.log(res);
        return res.status;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};


/*
export const updateTodoById = async (id: number, updatedTodo: Todo) => {    //PUT-REQUEST
    try {
        // Make a PUT request to update a todo item by its ID
        let res = await axios.put(`${URL}/${id}`, updatedTodo);
        return res.data;
    } catch (error) {
        // Handle errors here
        console.error(error);
        throw error;
    }
};
*/