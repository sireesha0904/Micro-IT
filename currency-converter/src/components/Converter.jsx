import React, { useState, useEffect } from "react";
import "./Converter.css";

export default function Converter() {
  const [rates, setRates] = useState({});
  const [currFrom, setCurrFrom] = useState("USD");
  const [currTo, setCurrTo] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest")
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Error fetching rates:", e);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (rates[currFrom] && rates[currTo]) {
      const converted = (amount / rates[currFrom]) * rates[currTo];
      setResult(converted.toFixed(4));
    }
  }, [amount, currFrom, currTo, rates]);

  if (loading)
    return (
      <section className="converter container" id="home">
        <h2>Currency Converter</h2>
        <p className="loading">Loading rates...</p>
      </section>
    );

  return (
    <section className="converter container" id="home">
      <h2>Currency Converter</h2>

      <div className="input-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="any"
        />
      </div>

      <div className="input-group">
        <label htmlFor="currFrom">From:</label>
        <select
          id="currFrom"
          value={currFrom}
          onChange={(e) => setCurrFrom(e.target.value)}
        >
          {Object.keys(rates).map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="currTo">To:</label>
        <select
          id="currTo"
          value={currTo}
          onChange={(e) => setCurrTo(e.target.value)}
        >
          {Object.keys(rates).map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>

      <button
        className="convert-btn"
        onClick={() => {
          if (amount <= 0) {
            alert("Please enter a valid amount.");
            return;
          }
          // Result auto-updates, so this is mostly for UX.
        }}
      >
        Convert
      </button>

      {result && (
        <p className="result">
          {amount} {currFrom} ={" "}
          <strong>
            {result} {currTo}
          </strong>
        </p>
      )}
    </section>
  );
}
