import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./reducers/index";

const store = configureStore({ reducer: allReducers, devTools: true });

export default store;