import React from "react";
import "./services.css";
import { BsCheckAll } from "react-icons/bs";

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>Webpage Design</p>
            </li>

            <li>
              <BsCheckAll className="service_list-icon" />
              <p>App Design</p>
            </li>

            <li>
              <BsCheckAll className="service_list-icon" />
              <p>Canva</p>
            </li>

            <li>
              <BsCheckAll className="service_list-icon" />
              <p>Figma</p>
            </li>

            <li>
              <BsCheckAll className="service_list-icon" />
              <p>Bootstrap</p>
            </li>
          </ul>
        </article>
        {/* End of UI */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>This Portfolio</p>
            </li>

            <li>
              <BsCheckAll className="service_list-icon" />
              <p>WIX-Bio</p>
            </li>

            <li>
              <BsCheckAll className="service_list-icon" />
              <p>WordPress-Bio</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}

        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheckAll className="service_list-icon" />
              <p>Webpage Design</p>
            </li>

            <li>
              <BsCheckAll className="service_list-icon" />
              <p>Webpage Design</p>
            </li>

            <li>
              <BsCheckAll className="service_list-icon" />
              <p>Webpage Design</p>
            </li>

            <li>
              <BsCheckAll className="service_list-icon" />
              <p>Webpage Design</p>
            </li>

            <li>
              <BsCheckAll className="service_list-icon" />
              <p>Webpage Design</p>
            </li>
          </ul>
        </article>
        {/* End of Content creation */}
      </div>
    </section>
  );
};

export default services;
