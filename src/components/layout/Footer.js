import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <section id="footer">
      <nav className="footer-nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#my-work">My Work</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </nav>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/khaibar-saadat-6a3858208/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          <span>Linkedin</span>
        </a>
        <a href="https://github.com/khybe" target="_blank" rel="noreferrer">
          <FaGithub />
          <span>github</span>
        </a>
      </div>
      <address className="created-by">
        <p>
          Written by:
          <span>
            <a href="mailto:khybersaadat93@gmail">Khaibar Saadat</a>
          </span>
        </p>
        <p>
          Designed by:
          <span>
            <a href="sabina.bastiova@gmail.com">Sabina Bastiova</a>
          </span>
        </p>
        <p>
          Location: <span> Czech Republic</span>
        </p>
        <p>
          <AiOutlineCopyright />
          2023
          <span>khaibarsaadat.com</span>
        </p>
      </address>
    </section>
  );
};

export default Footer;
