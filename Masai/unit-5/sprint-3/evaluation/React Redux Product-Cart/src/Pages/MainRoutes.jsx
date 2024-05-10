import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../Components/PrivateRoute";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { CartPage } from "./CartPage";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
