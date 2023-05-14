import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Suyan Man Amatya",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde voluptatem est veniam dicta corporis deserunt! Enim iste eligendi suscipit ipsum delectus earum in quas nemo eius! Voluptate, quae eaque beatae neque est tempora fugiat dolorum totam tenetur quas aut ut. Placeat, voluptatum! Tenetur alias aut temporibus nulla odio amet.",
  },
  {
    avatar: AVTR2,
    name: "Suyan Man Amatya",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde voluptatem est veniam dicta corporis deserunt! Enim iste eligendi suscipit ipsum delectus earum in quas nemo eius! Voluptate, quae eaque beatae neque est tempora fugiat dolorum totam tenetur quas aut ut. Placeat, voluptatum! Tenetur alias aut temporibus nulla odio amet.",
  },
  {
    avatar: AVTR3,
    name: "Suyan Man Amatya",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde voluptatem est veniam dicta corporis deserunt! Enim iste eligendi suscipit ipsum delectus earum in quas nemo eius! Voluptate, quae eaque beatae neque est tempora fugiat dolorum totam tenetur quas aut ut. Placeat, voluptatum! Tenetur alias aut temporibus nulla odio amet.",
  },
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="clients_avatar">
                <img src={avatar} />
              </div>
              <h5 className="clients_name">{name}</h5>
              <small className="clients_review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default testimonials;
