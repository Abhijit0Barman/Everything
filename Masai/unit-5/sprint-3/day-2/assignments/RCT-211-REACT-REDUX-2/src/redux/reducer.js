import { GETTODO, POSTTODO } from "./actionType";

export const reducer=(state,{type,payload})=>{
    switch(type){
        case GETTODO:{
         return {
            ...state,
            todos:payload
         }
        }
        case POSTTODO:{
            return{
                todos:[...state.todos,payload]
            }
        }
        default:{
             return state;
        }
    }
}