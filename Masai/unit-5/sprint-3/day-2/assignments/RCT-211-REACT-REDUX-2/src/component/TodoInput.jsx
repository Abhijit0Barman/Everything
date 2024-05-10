import axios from "axios"
import {useDispatch} from 'react-redux'
import { postTodo } from "../redux/action"
import { useState } from "react"
export const TodoInput=()=>{
   const dispatch=useDispatch()
   const [title,setTitle]=useState('')
  console.log(title)
   const handleSubmit=(e)=>{
      e.preventDefalut()
    postTodos(title)
   }

    const postTodos=(title)=>{
        const newTodo={
            title,
            status:false
        }
        axios.post("http://localhost:3000/todos", newTodo)
        .then((res)=>{
            console.log(res.data)
            dispatch(postTodo(res.data))
        })
        .catch((error)=>console.log(error))
    }
     return <div>
     <form action="" >
     <input type="text" placeholder="Add Todo Here.." value={title} onChange={(e)=>setTitle(e.target.value)}/>
     <button onClick={handleSubmit}>Add Todo</button>
     </form>

     </div> 
}