import "./Home.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import myImg from "../../assets/Me.png";

const Home = () => {
  return (
    <section className="home" id="Home">
      <img src={myImg} alt="me" />
      <div className="homeText">
        <h3>Hello everybody, I'm</h3>
        <h1>Muhammed Ferhan</h1>
        <h2>
          <span>MERN-Stack</span> developer
        </h2>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Home;
