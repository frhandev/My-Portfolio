/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/baseUrl";
import SkillCard from "./SkillCard";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/skills`);
        const data = await res.json();
        setSkills(data);
        console.log(data);
      } catch {
        setErr(true);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="Skills" className="skills">
      <h2>Skills</h2>
      <div className="skillBarsContainer">
        {skills.map((skill) => (
          <div>
            <SkillCard
              skillName={skill.skillName}
              logo={skill.logo}
              skillPerc={skill.skillPerc}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
