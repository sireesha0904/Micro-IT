import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Currency Converter. Built with ❤️ by Modi
        Sireesha.
      </p>
      <div className="social-links">
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} color="#0A66C2" />
        </a>

        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={28} color="#171515" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
