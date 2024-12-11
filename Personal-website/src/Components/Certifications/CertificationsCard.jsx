import React from "react";
import "./Certifications.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

const CertificationsCard = ({ Name, company, Date, URL }) => {
  return (
    <a className="CertificationsCard" href={URL} target="_blank">
      <h3>
        <FontAwesomeIcon icon={faCertificate} />
      </h3>
      <h4>{Name}</h4>
      <h4>{company}</h4>
      <p>{Date}</p>
    </a>
  );
};

export default CertificationsCard;
