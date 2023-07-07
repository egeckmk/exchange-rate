import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { exchangeRatesSlice } from "./exchangeRate.js";

const rootReducer = combineReducers({
  exchangeRateState: exchangeRatesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
