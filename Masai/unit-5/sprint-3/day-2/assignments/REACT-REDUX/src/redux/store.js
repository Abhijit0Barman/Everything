import { combineReducers, legacy_createStore } from "redux";
import {reducer as todoReducer} from "./todo/reducer"
import {reducer as counterReducer} from "./counter/reducer"
import {reducer as AuthReducer} from "./Authent/reducer"

const rootReducer=combineReducers({
    counterReducer,
    todoReducer,
    AuthReducer
})

export const store =legacy_createStore(rootReducer)