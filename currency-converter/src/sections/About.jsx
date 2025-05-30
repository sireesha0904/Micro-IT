import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about container" id="about">
      <h2>About Currenex</h2>
      <p>
        Currenex is a real-time currency converter that helps you convert
        amounts between different currencies using live exchange rates from a
        reliable API.
      </p>

      <h3>How It Works</h3>
      <ul>
        <li>Fetches up-to-date exchange rates automatically.</li>
        <li>Select source and target currencies.</li>
        <li>Enter the amount to convert.</li>
        <li>Instantly shows converted result.</li>
      </ul>
    </section>
  );
}
