import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={{ marginBottom: '0.5rem' }}>Made with ❤️ by [Your Name]</p>
      <div style={styles.icons}>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: '3rem',
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#0077b6',
    color: 'white',
    borderRadius: '12px 12px 0 0',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '0.5rem',
  }
};

export default Footer;
