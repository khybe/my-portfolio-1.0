import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <section id="footer">
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
          <AiOutlineCopyright />
          2023
          <span>khaibarsaadat.com</span>
        </p>
      </address>
    </section>
  );
};

export default Footer;
