import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        SUYAN
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li>
          <a href="#services">SERVICES</a>
        </li>
        <li>
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        {/* <li>
          <a href="#testimonials">TESTIMONIALS</a>
        </li> */}
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">
          {" "}
          <FaFacebookSquare />
        </a>
        <a href="https://github.com">
          <FaGithub />
        </a>
        <a href="https://twitter.com">
          <ImTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; SUYAN MAN AMATYA. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
