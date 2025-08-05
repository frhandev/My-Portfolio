/* eslint-disable react/prop-types */
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ img, name, desc, gitHubLink, demoLink, skillsUsed }) => {
  return (
    <div className="projectCard">
      <div className="content">
        <div>
          <div className="img">
            <img src={img} />
            <div className="links">
              {gitHubLink && (
                <a href={gitHubLink} target="_blank">
                  <FontAwesomeIcon icon={faGithub} /> Code
                </a>
              )}
              <a href={demoLink} target="_blank">
                <FontAwesomeIcon icon={faLink} /> Live Demo
              </a>
            </div>
          </div>
          <h1>{name}</h1>
          <p>{desc}</p>
          <div className="skillsContainer">
            {skillsUsed.slice(0, 3).map((skill, index) => (
              <p className="skill" key={index}>
                {skill}
              </p>
            ))}
            {skillsUsed.length > 3 ? (
              <p className="skill">+{skillsUsed.length - 3}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
