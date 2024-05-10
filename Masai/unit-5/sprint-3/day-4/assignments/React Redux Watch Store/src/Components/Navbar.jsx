// import React from "react";

// const Navbar = () => {
//   return (
//     <div data-testid="navbar">
//       <div data-testid="navbar-home-link">
//         <img
//           src="/watch.png"
//           width="60px"
//           alt="logo"
//           style={{ display: "block" }}
//         />
//       </div>

//       <div>
//         {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
//         <button data-testid="navbar-login-button">LOGIN</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Assuming you store authentication status in Redux

  return (
    <div data-testid="navbar">
      <div data-testid="navbar-home-link">
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {isAuthenticated ? (
          // Render a link to the home page when the user is authenticated
          <Link to="/">HOME</Link>
        ) : (
          // Render a link button to the login page when the user is not authenticated
          <Link to="/login">
            <button data-testid="navbar-login-button">LOGIN</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
