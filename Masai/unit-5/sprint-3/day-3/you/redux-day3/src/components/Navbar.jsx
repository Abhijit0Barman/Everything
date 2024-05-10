import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",gap:"5rem",marginTop:"20px"}}>
      <Link to="/">Counter</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};
