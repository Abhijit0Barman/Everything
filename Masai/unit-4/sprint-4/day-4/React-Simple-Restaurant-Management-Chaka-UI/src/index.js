import { createRoot } from "react-dom/client";
import { addRestaurantReducer } from "./reducers/addRestaurantReducer";
import { editRestaurantReducer } from "./reducers/editRestaurantReducer";
import { homeReducer } from "./reducers/homeReducer";
import App from "./App";

import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);















// DO NOT REMOVE THIS PEICE OF CODE
if (window.Cypress) {
  window.addRestaurantReducer = addRestaurantReducer;
  window.editRestaurantReducer = editRestaurantReducer;
  window.homeReducer = homeReducer;
}
