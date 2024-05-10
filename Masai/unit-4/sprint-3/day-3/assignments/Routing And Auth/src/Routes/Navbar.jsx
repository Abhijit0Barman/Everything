
// function Navbar() {
//     return(
//         <div className = "navbar" >

//         </div>
//     )
// }

// export { Navbar }

// Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Navbar() {
  const { isAuth } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {isAuth && (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
