import React from "react";
import Header from "./sections/Header";
import Converter from "./components/Converter";
import About from "./sections/About";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Converter />
        <About />
      </main>
      <Footer />
    </>
  );
}
