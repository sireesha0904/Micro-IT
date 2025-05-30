import React from "react";
import Header from "./components/Header";
import Converter from "./components/Converter";
import Footer from "./components/Footer";
import "./App.css";
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Converter />
      </main>
      <Footer />
    </>
  );
}
