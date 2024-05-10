import { legacy_createStore,combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { themeReducer } from "./themeReducer";

const rootReducer=combineReducers({
    counterReducer,
    themeReducer
}
)

export const store=legacy_createStore(rootReducer)