import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./reducers";

export const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;