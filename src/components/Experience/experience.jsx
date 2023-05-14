import React from "react";
import "./experience.css";
import { MdVerified } from "react-icons/md";

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front-End/UI-Design</h3>
          <div className="experience_content">
            <article className="experience_details">
              <MdVerified className="experience_details-icon" size="1.3rem" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className="experience_details-icon" size="1.3rem" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className="experience_details-icon" size="1.3rem" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className="experience_details-icon" size="1.3rem" />
              <div>
                <h4>React</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className="experience_details-icon" size="1.3rem" />
              <div>
                <h4>Canva</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className="experience_details-icon" size="1.3rem" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className="experience_details-icon" size="1.3rem" />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>

        {/* =================----END OF FRONT-END ---------=================*/}

        <div className="experience_backend">
          <h3>Back-End</h3>
          <div className="experience_content">
            <article className="experience_details">
              <MdVerified className="experience_details-icon" size="1.3rem" />
              <div>
                <h4>C/C++</h4>
                <small className="text-light">Highly Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className="experience_details-icon" size="1.3rem" />
              <div>
                <h4>JAVA</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <MdVerified className="experience_details-icon" size="1.3rem" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
