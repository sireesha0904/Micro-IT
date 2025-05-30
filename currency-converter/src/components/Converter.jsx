import { useEffect, useState } from "react";

const Converter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [result, setResult] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch(`https://api.exchangerate.host/symbols`)
      .then((res) => res.json())
      .then((data) => {
        setCurrencies(Object.keys(data.symbols));
      });
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(
        `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`
      )
        .then((res) => res.json())
        .then((data) => {
          setExchangeRate(data.info.rate);
        });
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate) {
      setResult((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  return (
    <div className="converter">
      <h2>Currency Converter</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {currencies.map((cur) => (
          <option key={cur}>{cur}</option>
        ))}
      </select>

      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {currencies.map((cur) => (
          <option key={cur}>{cur}</option>
        ))}
      </select>

      <h3>
        {result
          ? `${amount} ${fromCurrency} = ${result} ${toCurrency}`
          : "Converting..."}
      </h3>
    </div>
  );
};

export default Converter;
