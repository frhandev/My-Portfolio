import "./Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faBriefcase,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  const certification = [
    {
      Name: "Complete C# Unity 2D Game Development",
      company: "GameDev.tv Team",
      Date: "Oct 2022",
      URL: "https://www.udemy.com/course/unitycourse/",
    },
    {
      Name: "IBM Front-End Developer",
      company: "IBM",
      Date: "Dec 2024",
      URL: "https://www.coursera.org/account/accomplishments/professional-cert/ABJZDB2B3VEG?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
    },
    {
      Name: "MERN: React, NodeJS, Express & MongoDB",
      company: "Udemy",
      Date: "May 2025",
      URL: "https://www.udemy.com/certificate/UC-775764bb-b46a-4d28-bce8-8afebe266fd0/",
    },
    {
      Name: "Google Prompting Essentials",
      company: "Google",
      Date: "Aug 2025",
      URL: "https://coursera.org/share/4cd26dfe3718b5037ab8ca1742898a06",
    },
  ];

  const education = [
    {
      school: "Konya Teknik University",
      title: "Bachelor's in Computer Engineering",
      from: "Sep 2022",
      to: "Jun 2026 Expected",
    },
  ];

  const jobExp = [
    // {
    //   company: "no",
    //   title: "no",
    //   from: "no",
    //   to: "no",
    // },
  ];

  return (
    <section className="resume" id="Resume">
      <h2>Education & Experience</h2>
      <div className="resumeCardContainer">
        <div className="resumeContainer certs" id="Certs">
          <div className="line"></div>
          <div className="resumeContentContainer">
            <h3 className="title">Certifications</h3>
            {certification.map((cert, index) => (
              <div key={index}>
                <a href={cert.URL} target="blank">
                  <h3>
                    <FontAwesomeIcon icon={faCertificate} /> {cert.Name}
                  </h3>
                </a>
                <h4>Auther: {cert.company}</h4>
                <p>{cert.Date}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="resumeContainer jobs" id="ExpAndEdu">
          <div className="line"></div>
          <div className="resumeContentContainer">
            <h3 className="title">Job Experience</h3>
            {jobExp.map((edu, index) => (
              <div key={index}>
                <h3>
                  <FontAwesomeIcon icon={faBriefcase} /> {edu.title}
                </h3>
                <h4>{edu.company}</h4>
                <p>
                  {edu.from} - {edu.to}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="resumeContainer edu" id="ExpAndEdu">
          <div className="line"></div>
          <div className="resumeContentContainer">
            <h3 className="title">Education</h3>
            {education.map((edu, index) => (
              <div key={index}>
                <h3>
                  <FontAwesomeIcon icon={faSchool} /> {edu.school}
                </h3>
                <h4>{edu.title}</h4>
                <p>
                  {edu.from} - {edu.to}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
