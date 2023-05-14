import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/coming-soon.webp";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "This is Portfolio Item",
    github: "https://github.com",
    demo: "https://www.youtube.com/results?search_query=github+",
  },
  {
    id: 2,
    image: IMG1,
    title: "This is Portfolio Item",
    github: "https://github.com",
    demo: "https://www.youtube.com/results?search_query=github+",
  },
  {
    id: 3,
    image: IMG1,
    title: "This is Portfolio Item",
    github: "https://github.com",
    demo: "https://www.youtube.com/results?search_query=github+",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target={"_blank"}>
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target={"_blank"}>
                  Live-Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
