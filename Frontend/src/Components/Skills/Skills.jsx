/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/baseUrl";
import SkillCard from "./SkillCard";
import "./Skills.css";
import html from "../../assets/skillIcons/html.png";
import css from "../../assets/skillIcons/css.png";
import js from "../../assets/skillIcons/js.png";
import ts from "../../assets/skillIcons/typescript.png";
import nextJS from "../../assets/skillIcons/nextjs.png";
import ReactLogo from "../../assets/skillIcons/React.png";
import mongoDB from "../../assets/skillIcons/mongoDB.png";
import express from "../../assets/skillIcons/express.png";
import nodeJS from "../../assets/skillIcons/nodeJS.png";
import Git from "../../assets/skillIcons/Git.png";
import restApi from "../../assets/skillIcons/rest-api.png";
import postman from "../../assets/skillIcons/postman.png";

const Skills = () => {
  const [activeCat, setActiveCat] = useState("All");

  const skills = [
    {
      skillName: "HTML",
      logo: html,
      cat: "Front-end",
    },
    {
      skillName: "CSS",
      logo: css,
      cat: "Front-end",
    },
    {
      skillName: "JavaScript",
      logo: js,
      cat: "Front-end",
    },
    {
      skillName: "TypeScript",
      logo: ts,
      cat: "Front-end",
    },
    {
      skillName: "Next.js",
      logo: nextJS,
      cat: "Front-end",
    },
    {
      skillName: "React.js",
      logo: ReactLogo,
      cat: "Front-end",
    },
    {
      skillName: "Express.js",
      logo: express,
      cat: "Back-end",
    },
    {
      skillName: "Node.js",
      logo: nodeJS,
      cat: "Back-end",
    },
    {
      skillName: "MongoDB",
      logo: mongoDB,
      cat: "Back-end",
    },
    {
      skillName: "Rest Api",
      logo: restApi,
      cat: "Back-end",
    },
    {
      skillName: "Postman",
      logo: postman,
      cat: "Tools",
    },
    {
      skillName: "Git / Github",
      logo: Git,
      cat: "Tools",
    },
  ];

  const filteredSkills =
    activeCat === "All" ? skills : skills.filter((s) => s.cat === activeCat);

  return (
    <section id="Skills" className="skills">
      <h2>Skills</h2>
      <div className="catagory">
        <a
          className={`${activeCat === "All" ? "active" : ""}`}
          onClick={() => setActiveCat("All")}
        >
          All
        </a>
        <a
          className={`${activeCat === "Front-end" ? "active" : ""}`}
          onClick={() => setActiveCat("Front-end")}
        >
          Front-End
        </a>
        <a
          className={`${activeCat === "Back-end" ? "active" : ""}`}
          onClick={() => setActiveCat("Back-end")}
        >
          Back-End
        </a>
        <a
          className={`${activeCat === "Tools" ? "active" : ""}`}
          onClick={() => setActiveCat("Tools")}
        >
          Tools
        </a>
      </div>
      <div className="skillBarsContainer">
        {filteredSkills.map((skill) => (
          <SkillCard
            skillName={skill.skillName}
            logo={skill.logo}
            skillPerc={skill.skillPerc}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
