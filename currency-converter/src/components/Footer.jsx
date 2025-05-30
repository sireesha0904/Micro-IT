import React from "react";
import { FaHeart, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Made with <FaHeart className="heart-icon" /> by Modi Sireesha
      </p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/your-x-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
        >
          <FaXTwitter />
        </a>
      </div>
    </footer>
  );
}
