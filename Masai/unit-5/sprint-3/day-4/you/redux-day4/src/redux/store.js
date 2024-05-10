import { combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authentication/reducer";
import { reducer as todoReducer } from "./todo/reducer";
import { reducer as counterReducer } from "./counter/reducer";

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  counterReducer,
  authReducer,
});

export const store = legacy_createStore(rootReducer);
