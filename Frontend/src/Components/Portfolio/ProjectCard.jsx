/* eslint-disable react/prop-types */
import "./Portfolio.css";

const ProjectCard = ({ img, name, desc, link }) => {
  const bgImg = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className="projectCard" style={bgImg}>
      <div className="content">
        <div>
          <h1>{name}</h1>
          <p>{desc}</p>
          <a href={link} target="_blank">
            See Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
