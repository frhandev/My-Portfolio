import React from "react";
import ProjectCard from "./ProjectCard";
import "./Portfolio.css";
import p4 from "../../assets/p3.jpg";
import p2 from "../../assets/project2.jpg";
import p3 from "../../assets/project3.jpg";

const Portfolio = () => {
  const projects = [
    {
      name: `RTX 3060 landing page`,
      link: `https://rtx3060landingpage.netlify.app/`,
      img: p3,
      desc: "A fictional product landing page for a RTX 3060 designed using HTML & CSS.",
    },
    {
      name: `Movie Maniac`,
      link: `https://movie-maniac124.netlify.app/`,
      img: p4,
      desc: "A movie website created for tutorial using HTML, CSS, Javascript, React.js",
    },
    {
      name: `Vitality Gym landing page`,
      link: `https://vitality-gym.netlify.app/`,
      img: p2,
      desc: "A landing page for a fictional fitness gym designed using HTML, CSS, JavaScript, and React.",
    },
  ];

  return (
    <section id="Portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div className="cards">
        {projects.map((project) => (
          <ProjectCard
            name={project.name}
            link={project.link}
            img={project.img}
            desc={project.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
