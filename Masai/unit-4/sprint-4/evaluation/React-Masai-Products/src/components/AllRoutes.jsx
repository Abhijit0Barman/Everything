import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
