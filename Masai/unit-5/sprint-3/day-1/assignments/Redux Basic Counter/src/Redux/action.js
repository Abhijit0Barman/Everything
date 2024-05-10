//DO NOT change the function names

import { ADD, REDUCE } from "./actionTypes";

//function to return the add action object
const handleAddActionObj = (payload) => {
    return { type: ADD, payload };
};

//function to return the reduce action object
const handleReduceActionObj = (payload) => {
    return { type: REDUCE, payload };
};

export { handleAddActionObj, handleReduceActionObj };   
