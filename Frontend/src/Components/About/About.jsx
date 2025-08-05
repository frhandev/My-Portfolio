import "./About.css";
import aboutImg from "../../assets/aboutImg.jpg";

const About = () => {
  return (
    <section id="About" className="about">
      <h2>About Me</h2>
      <div className="aboutMe">
        <img src={aboutImg} alt="" />
        <p>
          I am a passionate and skilled front-end developer with expertise in
          HTML, CSS, JavaScript, and React. With a strong foundation in web
          development and a keen eye for design, I create responsive and
          user-friendly websites. My goal is to bring innovative and efficient
          solutions to every project, ensuring high-quality results and customer
          satisfaction.
        </p>
      </div>
    </section>
  );
};

export default About;
