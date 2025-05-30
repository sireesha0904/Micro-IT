import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo">💱 Currenex</div>
        <div className="side-heading">Currency Converter</div>
      </div>
      <nav className="nav-links">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
      </nav>
    </header>
  );
}
