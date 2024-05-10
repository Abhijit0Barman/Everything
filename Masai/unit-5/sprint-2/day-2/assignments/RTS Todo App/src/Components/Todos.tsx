import React, { useEffect, useState } from "react";
import { newTodo } from "./Add";
import Todo from "./Todo";

function Todos() {
  const [data,setData]=useState<newTodo[]>([])

useEffect(()=>{
const data=localStorage.getItem("todos")
if(data){
  setData(JSON.parse(data))
}
},[])

const handleToggle=(index:number)=>{
  const update=[...data]
  update[index].status=!update[index].status
  setData(update)
  localStorage.setItem("todos",JSON.stringify(data))
  
}
  return <div>{/* All Todos Should be shown here  */}
{
  data?.map((el,index)=>{
    return <Todo key={index} {...el} 
    handleToggle={()=>handleToggle(index)}
    
    />
  })
}
  </div>;
}

export default Todos;
