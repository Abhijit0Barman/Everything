import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { authState } = useContext(AuthContext);
    if (!isAuth) {
        return <Navigate to={"/login"} />
    }

    return children;
};

export default PrivateRoute;
