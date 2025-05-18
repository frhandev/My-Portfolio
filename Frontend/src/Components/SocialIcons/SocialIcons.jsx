/* eslint-disable no-unused-vars */
import React from "react";
import "./SocialIcons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faUpwork,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  return (
    <div className="socialIcons">
      <a
        href="https://www.linkedin.com/in/muhammed-ferhan-793196252/"
        className="socialIconContainer"
        target="_blank"
      >
        <p>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </p>
      </a>

      <a
        href="https://www.instagram.com/mohammad_farhan53/"
        className="socialIconContainer"
        target="_blank"
      >
        <p>
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </a>

      <a
        href="https://github.com/frhandev"
        className="socialIconContainer"
        target="_blank"
      >
        <p>
          <FontAwesomeIcon icon={faGithub} />
        </p>
      </a>

      <a
        href="https://www.upwork.com/freelancers/~01c14824b86a56ad1a?mp_source=share"
        className="socialIconContainer"
        target="_blank"
      >
        <p>
          <FontAwesomeIcon icon={faUpwork} />
        </p>
      </a>
    </div>
  );
}

export default SocialIcons;
