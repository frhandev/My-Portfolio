/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Skills.css";

const SkillCard = ({ skillName, skillPerc, logo }) => {
  return (
    <div className="skillInfoContainer">
      <img src={logo} />
      <h3>{skillName}</h3>
    </div>
  );
};

export default SkillCard;
