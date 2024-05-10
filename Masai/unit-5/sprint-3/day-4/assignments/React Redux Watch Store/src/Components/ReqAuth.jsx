// //Create the HOC for protected Routes
// const ReqAuth = () => {};

// export default ReqAuth;


import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Custom higher-order component (HOC) for protected routes
const ReqAuth = (WrappedComponent) => {
  // Return a functional component that checks authentication
  return function AuthenticatedRoute(props) {
    // Access the authentication status from the Redux store
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // If the user is authenticated, render the wrapped component
    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      // If the user is not authenticated, navigate to the login page
      return <Navigate to="/login" />;
    }
  };
};

export default ReqAuth;
