import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
// import { VscVerified } from "react-icons/vsc";
import { MdVerified } from "react-icons/md";

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <div>
          <h1>
            Suyan Man Amatya{" "}
            <MdVerified className="verified-icon" size="3rem" />
          </h1>
        </div>

        <h5 className="text-light"> FRONT-END Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          {" "}
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
