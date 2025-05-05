import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";

const currencyContext = createContext();

export const useCurrencyContext = () => useContext(currencyContext);

export const CurrenyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [rates, setRates] = useState("");
  const [tenure, setTenure] = useState("");

  const api_key = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://v6.exchangerate-api.com/v6/073413beba225aeaaa6fd318/latest/USD`
      );
      setRates(res.data.conversion_rates);
    } catch (error) {
      console.log("Failed to fetch the rates");
    }
  };

  const convert = (amount, toCurrency) => {
    if (!rates[toCurrency]) return amount;
    return (amount * rates[toCurrency]).toFixed(2);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <currencyContext.Provider value={{ currency, setCurrency, rates, convert }}>
      {children}
    </currencyContext.Provider>
  );
};
