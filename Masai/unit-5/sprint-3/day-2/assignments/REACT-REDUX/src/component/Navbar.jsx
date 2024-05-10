import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent:"center",gap:"100px" }}>
      <Link to={"/"}>Counter</Link>
      <Link to={"/todoList"}>Todos</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};
