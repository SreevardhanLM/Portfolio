import { FiGithub, FiMail, FiInstagram } from 'react-icons/fi'
import '../CSS/Footer.css'

function Footer() {
  return (
    <footer id="Contact" className="footer section">
      <div className="footer-inner">
        <h2 className="footer-heading">Get In Touch</h2>
        <p className="footer-text">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, feel free to reach out!
        </p>
        <a
          href="mailto:lmsreevardhan@gmail.com"
          className="btn btn-primary footer-cta"
        >
          Say Hello
        </a>
        <div className="footer-socials">
          <a
            href="https://github.com/Sreevardhan2002-cell"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.instagram.com/titan_king_0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram />
          </a>
          <a href="mailto:lmsreevardhan@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            Designed & Built by <a href="#Home">Sreevardhan L M</a>
          </p>
          <p className="footer-copy">&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer