import { useDispatch,useSelector } from "react-redux"
import { getTodo } from "../redux/action"
import { store } from "../redux/store"
import axios from "axios"
import { useEffect } from "react"

export const TodoList=()=>{
    const dispatch=useDispatch()
    const todos= useSelector((store)=>store.todos)

   

     useEffect(()=>{
        axios.get("http://localhost:3000/todos")
        .then((res)=>{
            dispatch(getTodo(res.data))
            console.log(res.data)
        })
         .catch((error)=>console.log(error))
        
     },[])

     console.log(todos)
    return <div>
        
       {
         todos?.map((elem)=>(
           <div key={elem.id}>
             <h3>Title: {elem.title}</h3>
             <p>Status:{elem.status?"True":"False"}</p>
             <button>Toggle</button>
             <button>Edit</button>
             <button>Delete</button>
           </div>
         ))
       }
    </div>

    

    
}