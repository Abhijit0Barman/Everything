import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
const init = {
  counter: 0,
  todo: [],
};

export const store = legacy_createStore(reducer, init);
