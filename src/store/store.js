import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createPromise } from 'redux-promise-middleware'
import {composeWithDevTools } from 'redux-devtools-extension'; 
import rootReducer from "./reducer";
import logger from "redux-logger";
const promise = createPromise({ promiseTypeSuffixes: ['PENDING', 'FULFILLED', 'REJECTED'] });
const store=legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk,promise)))
export default store