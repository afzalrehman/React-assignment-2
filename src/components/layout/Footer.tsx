import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-logo">ToyProjects</h2>
          <p>Learning React by building small projects 🚀</p>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Right Section */}
        <div className="footer-social">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ToyProjects. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
