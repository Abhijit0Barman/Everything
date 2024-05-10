import axios from "axios"
import { useDispatch } from "react-redux"
import { postTodoAction, postTodoErrorAction, postTodoLoadAction } from "../redux/todo/action"
import { POST_TODO_ERROR } from "../redux/todo/actionType"
import { useState } from "react"

export const TodoInput=({setRender})=>{
    const [title,setTitle]=useState('')
    const dispatch=useDispatch()

    const handleClick=()=>{
        postTodos(title)
        setTitle('')
    }

    const  postTodos=(title)=>{
        console.log("post data todos")
        const newTodo={
           title,
            status:false
        }
        dispatch(postTodoLoadAction())
        axios.post("http://localhost:8080/todos",newTodo)
        .then((res)=> {
            dispatch(postTodoAction(res.data))
            console.log(res.data)
            setRender((prev)=>!prev)
        })
        .catch((error)=>dispatch(postTodoErrorAction()))
    }
    
    // console.log(todo)
    return <div>
        <input type="text" placeholder="Add Todo here.." value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={handleClick}>Add Todo</button>
    </div>
}