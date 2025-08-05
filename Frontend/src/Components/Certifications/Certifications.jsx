/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import "./Certifications.css";
import CertificationsCard from "./CertificationsCard";
import { useEffect } from "react";
import { BASE_URL } from "../../Constants/baseUrl";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/certifications`);
        const data = await res.json();
        setCertifications(data);
      } catch {
        setErr(true);
      }
    };

    fetchData();
  }, []);

  return Certifications && !err ? (
    <section className="Certifications" id="Certifications">
      <h2>Certifications</h2>
      <div className="CertificationsCards">
        {certifications.map((cert, index) => (
          <CertificationsCard
            key={index}
            name={cert.Name}
            company={cert.company}
            url={cert.URL}
            date={cert.Date}
          />
        ))}
      </div>
    </section>
  ) : (
    <section className="Certifications" id="Certifications">
      <h2>Certifications</h2>
      <div className="CertificationsCards">
        {defaultValeus.map((cert, index) => (
          <CertificationsCard
            key={index}
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
