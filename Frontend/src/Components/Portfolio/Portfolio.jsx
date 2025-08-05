/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import ProjectCard from "./ProjectCard";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Portfolio = () => {
  const [activeCat, setActiveCat] = useState("All");
  const projects = [
    {
      title: "Prescripto",
      thumbnail:
        "https://www.upwork.com/att/download/portfolio/persons/uid/1796128853393170432/profile/projects/files/73d64be5-f5c4-4b5b-aa28-967c43c84976",
      desc: "Built a doctor-booking web platform from scratch (MERN). Patients search by specialty, book, and pay online; doctors manage appointments; admin oversees the system.",
      demoLink: "https://prescriptro.kodnasoft.com/",
      gitHubLink: "https://github.com/frhandev/Hastane-Yonetim-web-app",
      skillsUsed: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
      cat: "FullStack",
    },
    {
      title: "Vitality Gym",
      thumbnail:
        "https://www.upwork.com/att/download/portfolio/persons/uid/1796128853393170432/profile/projects/files/211886fd-1327-4096-8985-98c081d1b4eb",
      desc: "A landing page for a fictional fitness gym designed using HTML, CSS, JavaScript, and React.",
      demoLink: "https://vitality-gym.netlify.app/",
      gitHubLink: "https://github.com/frhandev/Vitality-Gym",
      skillsUsed: ["HTML", "CSS"],
      cat: "Frontend",
    },
    {
      title: "RTX 3060 landing page",
      thumbnail:
        "https://www.upwork.com/att/download/portfolio/persons/uid/1796128853393170432/profile/projects/files/119ad752-c76d-4381-9380-5cc6240688a1",
      desc: "A fictional product landing page for a RTX 3060 designed using HTML & CSS.",
      demoLink: "https://rtx3060landingpage.netlify.app/",
      gitHubLink: "https://github.com/frhandev/RTX3060-landing-Page",
      skillsUsed: ["HTML", "CSS"],
      cat: "Frontend",
    },
    {
      title: "Thunnorain Bookstore",
      thumbnail:
        "https://www.upwork.com/att/download/portfolio/persons/uid/1796128853393170432/profile/projects/files/c646c1b4-d8b6-4030-8409-1710c13c87f7",
      desc: "An islamic bookstore",
      demoLink: "https://thunnorain.kodnasoft.com",
      skillsUsed: ["WordPress", "WooCommerce"],
      cat: "Wordpress",
    },
  ];

  const filteredProjects =
    activeCat === "All"
      ? projects
      : projects.filter((s) => s.cat === activeCat);

  return (
    <section id="Portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div className="catagory">
        <a
          className={`${activeCat === "All" ? "active" : ""}`}
          onClick={() => setActiveCat("All")}
        >
          All
        </a>
        <a
          className={`${activeCat === "FullStack" ? "active" : ""}`}
          onClick={() => setActiveCat("FullStack")}
        >
          Full-Stack
        </a>
        <a
          className={`${activeCat === "Frontend" ? "active" : ""}`}
          onClick={() => setActiveCat("Frontend")}
        >
          Front-End
        </a>
        <a
          className={`${activeCat === "Wordpress" ? "active" : ""}`}
          onClick={() => setActiveCat("Wordpress")}
        >
          Wordpress
        </a>
      </div>
      <div className="cards">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.title}
            img={project.thumbnail}
            desc={project.desc}
            gitHubLink={project.gitHubLink}
            demoLink={project.demoLink}
            skillsUsed={project.skillsUsed}
          />
        ))}
      </div>
      <div className="allPLinksContainer">
        <a
          className="allPLinks"
          href="https://github.com/frhandev/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} /> See All Projects
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
