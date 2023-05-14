import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/suyan-man-amatya-bb138a204/"
        target={"_blank"}>
        <BsLinkedin size="2em" />
      </a>
      <a href="https://facebook.com" target={"_blank"}>
        {" "}
        <BsFacebook size="2em" />
      </a>
      <a href="https://twitter.com" target={"_blank"}>
        {" "}
        <BsTwitter size="2em" />{" "}
      </a>
    </div>
  );
};

export default HeaderSocials;
