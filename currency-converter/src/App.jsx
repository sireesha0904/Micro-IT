import Converter from "./components/Converter";
import Footer from "./components/Footer";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import './App.css';
import React from 'react';
function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Currency Converter</h1>
      </header>

      <main>
        <About />
        <HowItWorks />
        <Converter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
