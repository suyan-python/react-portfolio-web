import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi";
const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" size="1.4em" />
              <h5>Experience</h5>
              <small>3+YearsWorking</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" size="1.4em" />
              <h5>Clients</h5>
              <small>200+WorldWide</small>
            </article>

            <article className="about_card">
              <HiAcademicCap className="about_icon" size="1.4em" />
              <h5>Projects</h5>
              <small>80+Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            eaque placeat pariatur sit error exercitationem animi et nisi
            voluptas molestias, quasi dicta natus expedita. Delectus
            reprehenderit rem nesciunt voluptates unde.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
