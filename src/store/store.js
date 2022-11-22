import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import logger from "redux-logger";
const store=legacy_createStore(rootReducer,applyMiddleware(logger,thunk))
export default store