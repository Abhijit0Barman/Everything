//use this variable to create the redux store.

import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const init={
    counter:10
}

//the initial data of the redux store should be {counter: 10}
const store = legacy_createStore(reducer,init);

export { store };
