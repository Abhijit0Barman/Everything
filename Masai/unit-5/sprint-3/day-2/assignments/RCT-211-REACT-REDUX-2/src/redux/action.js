import { GETTODO, POSTTODO } from "./actionType"

export const getTodo=(payload)=>{
    return {type:GETTODO,payload}
}

export const postTodo=(payload)=>{
    return {type:POSTTODO,payload}
}