import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContextProvider";

//Do not remove/change the below two imports
import { initState } from "./pages/products/productsReducer";
import { productsReducer } from "./pages/products/productsReducer";
// import { reducer } from "./reducer/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </AuthContextProvider>
);

// DO NOT REMOVE THIS PEICE OF CODE
if (window.Cypress) {
  window.reducerInitialState = initState;
  window.reducer = productsReducer;
}
