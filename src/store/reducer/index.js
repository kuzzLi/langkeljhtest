// import { combineReducers } from "redux";
import { combineReducer } from "./combineReducer";
import CountReducer from "./CountReducer";
import { UserReducer } from "./UserReducer";
const rootReducer=combineReducer({
    count:CountReducer,
    user:UserReducer
})
export default rootReducer