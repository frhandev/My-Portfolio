/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import "./Certifications.css";
import CertificationsCard from "./CertificationsCard";
import { useEffect } from "react";
import { BASE_URL } from "../../Constants/baseUrl";

const Certifications = () => {
  // const cards = [
  //   {
  //     Name: "IBM Front-End Developer",
  //     company: "IBM",
  //     Date: "7/12/2024",
  //     URL: "https://www.coursera.org/account/accomplishments/professional-cert/ABJZDB2B3VEG?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  //   },
  //   {
  //     Name: "MERN: React, NodeJS, Express & MongoDB",
  //     company: "Udemy",
  //     Date: "15/05/2025",
  //     URL: "https://www.udemy.com/certificate/UC-775764bb-b46a-4d28-bce8-8afebe266fd0/",
  //   },
  // ];

  const [certifications, setCertifications] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/certifications`);
        const data = await res.json();
        setCertifications(data);
        console.log(data);
      } catch {
        setErr(true);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="Certifications" id="Certifications">
      <h2>Certifications</h2>
      <div className="CertificationsCards">
        {certifications.map((cert) => (
          <CertificationsCard
            name={cert.Name}
            company={cert.company}
            url={cert.URL}
            date={cert.Date}
          />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
