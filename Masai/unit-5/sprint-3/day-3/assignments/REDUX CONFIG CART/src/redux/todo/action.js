import { GET_TODO, GET_TODO_ERROR, GET_TODO_LOAD, POST_TODO, POST_TODO_ERROR, POST_TODO_LOAD } from "./actionType"

export const getTodoAction=(payload)=>{
  return {type:GET_TODO,payload}
}

export const getTodoLoadAction=()=>{
    return {type:GET_TODO_LOAD}
}
export const getTodoErrorAction=()=>{
    return {type:GET_TODO_ERROR}
}

export const postTodoAction=(payload)=>{
  return {type:POST_TODO,payload}
}

export const postTodoLoadAction=()=>{
    return {type:POST_TODO_LOAD}
}
export const postTodoErrorAction=()=>{
    return {type:POST_TODO_ERROR}
}