import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar";
import { AuthContextProvider } from "./Context/AuthContext";

const App = () => {
  // DO NOT CHANGE/MODIFY this app-structure here
  return <div className="App">{/* add Navbar and AllRoutes here */}
    <AuthContextProvider>
      {/* <BrowserRouter/> */}
      <Navbar />
      <AllRoutes />
      {/* <BrowserRouter /> */}
    </AuthContextProvider>
  </div>;
};

export default App;
