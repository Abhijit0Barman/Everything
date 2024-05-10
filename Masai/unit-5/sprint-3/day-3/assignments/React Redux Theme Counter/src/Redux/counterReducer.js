//Complete the reducer function logic inside the curly braces {}
// the counter initstate shouldbe 10

import { ADD, REDUCE } from "./actionTypes";

const initState={
    counter:10
}


const counterReducer = (state=initState,{ type,payload }) => {
    switch(type){
        case ADD:
            return {
                ...state,
                counter:state.counter + payload
            }
        case REDUCE:
            return {
                ...state,
                counter:state.counter - payload
            }
        default : return state
    }
};

export { counterReducer };