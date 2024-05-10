import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const history=useHistory()
  const [authState,logoutUser]=useContext(AuthContext)

  cons handleLogout=()=>{
    logoutUser();
    history.push('/login')
  }

  // const links = [
  //   { path: "/", title: "Home" },
  //   { path: "/login", title: "Login" },
  //   { path: "/productdetailspage", title: "ProductDetailsPage" }
  // ]
  return (
    <div data-testid="navbar">
      <div className="name">React-OLX</div>
      <div data-testid="login-logout">
        {/* Either Link to login or span(welcome message)+Logout button with className="logout" should be there */}
        {authState.isAuth?(<>
          <span>
            Welcome, {authState.userDetails.email}!
          </span>
          <button className="logout" onClick={handleLogout}>Logout</button>
        </>):(<Link to="/login">Login</Link>)}
      </div>
    </div>
  );
};

export default Navbar;
