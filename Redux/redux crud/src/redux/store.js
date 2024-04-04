import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authentication/reducer";
import { reducer as productReducer } from "./products/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  authReducer,
  productReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
