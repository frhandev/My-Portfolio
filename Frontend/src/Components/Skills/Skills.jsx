import React from "react";
import SkillBar from "./SkillBar";
import "./Skills.css";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faSearch } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const skills = [
    { skillName: "HTML", logo: faHtml5, skillPerc: "100%" },
    { skillName: "CSS", logo: faCss3, skillPerc: "100%" },
    { skillName: "Javascript", logo: faJs, skillPerc: "100%" },
    { skillName: "React", logo: faReact, skillPerc: "90%" },
    { skillName: "Problem Solving", logo: faCode, skillPerc: "80%" },
    {
      skillName: "Git/Github Version Control",
      logo: faGithub,
      skillPerc: "80%",
    },
    { skillName: "UI/UX", logo: faFigma, skillPerc: "60%" },
    { skillName: "SEO", logo: faSearch, skillPerc: "80%" },
  ];

  return (
    <section id="Skills" className="skills">
      <h2>Skills</h2>
      <div className="skillBarsContainer">
        {skills.map((skill) => (
          <SkillBar
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
