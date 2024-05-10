import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as rootReducer } from './reducer'


// create store using legacy_createStore
// Don't use combineReducer


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
