import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  // return <>{/* Complete this higher order component  */}</>;
  const auth = useSelector((s) => s.authReducer.isAuth);
  return auth ? children : <Navigate to={"/login"} />;
};
