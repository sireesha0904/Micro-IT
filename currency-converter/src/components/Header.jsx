import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <FaMoneyBillWave className="header-icon" />
      <h1 className="header-title">Currency Converter</h1>
      <FaMoneyBillWave className="header-icon" />
    </header>
  );
}
