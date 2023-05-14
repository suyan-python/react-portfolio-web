import React from "react";
import "./contact.css";
import { GrMail } from "react-icons/gr";
import { AiFillMessage } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_s1clslq",
      "template_a6hj5v9",
      form.current,
      "jyrMdgGtDCHFcS3S_"
    );

    e.target.reset();
    // .then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };

  return (
    <section id="contact">
      <h5>Get In Touch😉</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option1">
            <GrMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>srkamatya007@gmail.com</h5>
            <a href="mailto:srkamatya007@gmail.com" target={"_blank"}>
              Send Mail
            </a>
          </article>

          <article className="contact_option2">
            <AiFillMessage className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Amatya SuyAn</h5>
            <a href="https://m.me/iamsuyan.11" target={"_blank"}>
              Send Message
            </a>
          </article>

          <article className="contact_option3">
            <RiWhatsappFill className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+977 9843822887</h5>
            <a href="https://wa.me/9779843822887" target={"_blank"}>
              Send Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
