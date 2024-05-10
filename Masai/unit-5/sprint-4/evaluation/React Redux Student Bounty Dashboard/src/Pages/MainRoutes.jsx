import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { PrivateRoute } from "../Components/PrivateRoute";
import { StudentDetail } from "./StudentDetail";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* Add all routes here */}
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/student/:id"
        element={
          <PrivateRoute>
            <StudentDetail />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
