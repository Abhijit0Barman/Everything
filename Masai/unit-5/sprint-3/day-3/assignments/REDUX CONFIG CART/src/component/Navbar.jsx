import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return <div style={{display:"flex", gap:"50px"}}>
   <Link to={'/'}>Counter</Link>
    <Link to={'/todoList'}>Todos</Link>
    <Link to={'/login'}>Login</Link>
  </div>
    
    
  
}
