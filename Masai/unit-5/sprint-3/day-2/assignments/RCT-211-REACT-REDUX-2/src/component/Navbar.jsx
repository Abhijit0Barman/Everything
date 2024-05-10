import React from "react";
import { Link } from "react-router-dom";
import { Home} from "../pages/Home";
import { Todo } from "../pages/Todo";
import { Add } from "../pages/Add";
export const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around", alignItems:"center", backgroundColor:"red", color:"white"}}>
      <h3>TODO APP</h3>
      <Link to="/">Home</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/Edit">Add</Link>
      
    </div>
  );
};
