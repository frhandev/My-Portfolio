import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bar from "../../assets/eeba2c.png";

const SkillBar = ({ skillName, skillPerc, logo }) => {
  const [perci, setPerci] = useState(0);

  window.addEventListener("scroll", handleScroll);

  function handleScroll() {
    const skillsScrollY =
      document.getElementById("Home").scrollHeight +
      //   document.getElementById("About").scrollHeight +
      document.getElementById("Resume").scrollHeight -
      document.getElementById("Skills").scrollHeight;
    if (window.scrollY > skillsScrollY) {
      setPerci(skillPerc);
      window.removeEventListener("scroll", handleScroll);
    }
  }

  const barWidth = {
    width: `${perci}`,
  };
  return (
    <div className="skillBar">
      <h3>
        {skillName} <FontAwesomeIcon icon={logo} />
      </h3>

      <div className="barContainer">
        <img className="bar" style={barWidth} src={bar} />
      </div>
    </div>
  );
};

export default SkillBar;
