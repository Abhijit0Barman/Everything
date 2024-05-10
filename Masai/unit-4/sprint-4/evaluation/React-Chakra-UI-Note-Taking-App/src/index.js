import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//Do not remove/change the below two imports
import { initialState } from "./reducer/reducer";
import { reducer } from "./reducer/reducer";

import { ChakraProvider } from "@chakra-ui/react"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>

    <App />
  </ChakraProvider>

);

// DO NOT REMOVE THIS PEICE OF CODE
if (window.Cypress) {
  window.reducerInitialState = initialState;
  window.reducer = reducer;
}
