/* eslint-disable react/jsx-key */
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
    {
      Name: "MERN: React, NodeJS, Express & MongoDB",
      company: "Udemy",
      Date: "15/05/2025",
      URL: "https://www.udemy.com/certificate/UC-775764bb-b46a-4d28-bce8-8afebe266fd0/",
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
