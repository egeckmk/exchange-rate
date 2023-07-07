import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { trueCalculate } from "../utils/utils";
import {
  setExchangeRates,
  setReverseExchangeRates,
  setFrom,
  setTo,
} from "../store/exchangeRate";

function Converter() {
  const dispatch = useDispatch();
  const [result, setResult] = useState(1);

  const exchangeRates = useSelector(
    (state) => state.exchangeRateState.exchangeRates
  );
  const reverseExchangeRates = useSelector(
    (state) => state.exchangeRateState.reverseExchangeRates
  );
  const from = useSelector((state) => state.exchangeRateState.from);
  const to = useSelector((state) => state.exchangeRateState.to);

  const [amount, setAmount] = useState(1);

  const handleFromChange = (e) => {
    dispatch(setFrom(e.target.value));
  };

  const handleToChange = (e) => {
    dispatch(setTo(e.target.value));
  };

  const getExchangeRates = async () => {
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${from}`
      );
      if (response.data) {
        dispatch(setExchangeRates(response.data.rates));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getReverseExchangeRates = async () => {
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${to}`
      );
      if (response.data) {
        dispatch(setReverseExchangeRates(response.data.rates));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getExchangeRates();
    getReverseExchangeRates();
    setResult(trueCalculate("*", amount || 1, reverseExchangeRates[from] || 1));
  }, [from, to]);

  const handleAmount = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      // Sadece sayısal değerler kabul edilir
      setAmount(value);
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <div className="flex flex-col border w-1/2 p-8 rounded-lg">
        <div className="flex justify-between mb-4">
          <div className="flex flex-col">
            <label>Amount</label>
            <input
              type="text"
              className="p-2 border rounded-lg"
              placeholder="100"
              value={amount}
              onChange={handleAmount}
            />
          </div>
          <div className="flex flex-col">
            <label>From</label>
            <select
              className="border p-2 rounded-lg"
              value={from}
              onChange={handleFromChange}
            >
              <option value="">Select</option>
              <option value="TRY">Turkish Lira</option>
              <option value="USD">US Dolar</option>
              <option value="EUR">Euro</option>
              <option value="GBP">British Pound</option>
              <option value="JPY">Japanese Yen</option>
              <option value="CNY">Chinese Yuan Renminbi</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>To</label>
            <select
              className="border p-2 rounded-lg"
              value={to}
              onChange={handleToChange}
            >
              <option value="">Select</option>
              <option value="TRY">Turkish Lira</option>
              <option value="USD">US Dolar</option>
              <option value="EUR">Euro</option>
              <option value="GBP">British Pound</option>
              <option value="JPY">Japanese Yen</option>
              <option value="CNY">Chinese Yuan Renminbi</option>
            </select>
          </div>
        </div>
        <div className="mb-4">{from + " => " + to}</div>
        <div className="w-1/3 flex items-center gap-4 mb-4">
          <label>Result</label>
          <div className="p-2 border rounded-lg w-full">
            {trueCalculate("*", amount || 1, reverseExchangeRates[from] || 1)}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <label>1 {to}</label>
          <div className="p-1">
            {reverseExchangeRates[from]} {from}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>1 {from}</div>
          <div className="p-1">
            {exchangeRates[to]} {to}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Converter;
