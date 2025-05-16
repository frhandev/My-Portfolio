/* eslint-disable react/prop-types */
import "./Certifications.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

const CertificationsCard = ({ name, company, date, url }) => {
  return (
    <a className="CertificationsCard" href={url} target="_blank">
      <h3>
        <FontAwesomeIcon icon={faCertificate} />
      </h3>
      <h4>{name}</h4>
      <h4>{company}</h4>
      <p>{date}</p>
    </a>
  );
};

export default CertificationsCard;
