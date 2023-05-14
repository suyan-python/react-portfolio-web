import React from "react";
import "./nav.css";
import { BiHomeSmile } from "react-icons/bi";
import { CgUserlane } from "react-icons/cg";
import { FaCrown } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}>
        <BiHomeSmile size="2em" />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}>
        <CgUserlane size="2em" />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}>
        <FaCrown size="2em" />
      </a>

      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}>
        <RiServiceLine size="2em" />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}>
        <AiFillMessage size="2em" />
      </a>
    </nav>
  );
};

export default Nav;
