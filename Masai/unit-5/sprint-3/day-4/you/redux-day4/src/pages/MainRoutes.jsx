import React from "react";
import { Routes, Route } from "react-router-dom";
import { Counter } from "../components/Counter";
import { TodoList } from "../components/TodoList";
import { Login } from "./Login";
import { PrivateRoute } from "../components/PrivateRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
      <Route
        path="/todo"
        element={
          <PrivateRoute>
            <TodoList />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
