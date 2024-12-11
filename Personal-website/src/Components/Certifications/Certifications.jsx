import React from "react";
import "./Certifications.css";
import CertificationsCard from "./CertificationsCard";

const Certifications = () => {
  const cards = [
    {
      Name: "IBM Front-End Developer",
      company: "IBM",
      Date: "7/12/2024",
      URL: "https://www.coursera.org/account/accomplishments/professional-cert/ABJZDB2B3VEG?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
    },
  ];
  return (
    <section className="Certifications" id="Certifications">
      <h2>Certifications</h2>
      <div className="CertificationsCards">
        {cards.map((card) => (
          <CertificationsCard
            Name={card.Name}
            company={card.company}
            URL={card.URL}
            Date={card.Date}
          />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
