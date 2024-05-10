// NOTE: use this store variable to create a store.
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"; // You need to install redux-thunk separately

// Import your reducers
import appReducer from "./appReducer";
import authReducer from "./authReducer";

// Combine your reducers if needed
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

// Create the Redux store with the combined reducers and apply middleware
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
