/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import "./Portfolio.css";
import p4 from "../../assets/p3.jpg";
import p2 from "../../assets/project2.jpg";
import p3 from "../../assets/project3.jpg";
import { BASE_URL } from "../../Constants/baseUrl";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/projects`);
        const data = await res.json();
        setProjects(data);
        console.log(data);
      } catch {
        setErr(true);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="Portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div className="cards">
        {projects.map((project) => (
          <ProjectCard
            name={project.title}
            link={project.URL}
            img={project.thumbnail}
            desc={project.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
