import { createSlice } from "@reduxjs/toolkit";

export const exchangeRatesSlice = createSlice({
  name: "exchangeRateState",
  initialState: {
    from: "TRY",
    to: "USD",
    exchangeRates: {},
    reverseExchangeRates: {},
  },
  reducers: {
    setExchangeRates: (state, action) => {
      state.exchangeRates = action.payload;
    },
    setReverseExchangeRates: (state, action) => {
      state.reverseExchangeRates = action.payload;
    },
    setFrom: (state, action) => {
      state.from = action.payload;
    },
    setTo: (state, action) => {
      state.to = action.payload;
    },
  },
});

export const { setExchangeRates, setReverseExchangeRates, setFrom, setTo } =
  exchangeRatesSlice.actions;
