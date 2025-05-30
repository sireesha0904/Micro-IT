import React, { useState, useEffect } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import "./Converter.css";

const API_URL = "https://api.exchangerate-api.com/v4/latest/USD";

export default function Converter() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState(null);
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setCurrencies([data.base, ...Object.keys(data.rates)]);
        setRates(data.rates);
      })
      .catch(() => alert("Failed to fetch currency data."));
  }, []);

  useEffect(() => {
    if (!rates) return;
    if (fromCurrency === toCurrency) {
      setConverted(amount);
      return;
    }
    const rateFromUSD = fromCurrency === "USD" ? 1 : 1 / rates[fromCurrency];
    const rateTo = toCurrency === "USD" ? 1 : rates[toCurrency];
    const result = amount * rateFromUSD * rateTo;
    setConverted(result.toFixed(4));
  }, [amount, fromCurrency, toCurrency, rates]);

  return (
    <section className="converter">
      <div className="input-row">
        <input
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-amount"
          placeholder="Enter amount"
        />

        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="select-currency"
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>

        <FaExchangeAlt className="exchange-icon" />

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="select-currency"
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>

      <div className="result">
        {converted !== null ? (
          <>
            <span>{amount}</span> <strong>{fromCurrency}</strong> =&gt;{" "}
            <span>{converted}</span> <strong>{toCurrency}</strong>
          </>
        ) : (
          "Loading rates..."
        )}
      </div>
    </section>
  );
}
