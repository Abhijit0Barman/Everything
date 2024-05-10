// import React from 'react'

// const AllRoutes = () => {
//     return (
//         <div></div>
//     )
// }

// export {AllRoutes}

// Routes.js
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const AllRoutes = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
