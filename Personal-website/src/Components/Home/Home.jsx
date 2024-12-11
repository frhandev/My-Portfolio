import React from "react";
import me from "../../assets/Me.png";
import "./Home.css";
import SocialIcons from "../SocialIcons/SocialIcons";

const Home = () => {
  return (
    <section className="home" id="Home">
      <img src={me} alt="me" />
      <div className="homeText">
        <h3>Hello everybody, I'm</h3>
        <h1>Muhammed Ferhan</h1>
        <h2>
          <span>Front-end</span> developer
        </h2>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Home;
