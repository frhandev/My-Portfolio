import "./Home.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/baseUrl";

const Home = () => {
  const [info, setInfo] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/me`);
        const data = await res.json();
        setInfo(data);
        console.log(data);
      } catch {
        setErr(true);
      }
    };

    fetchData();
  }, []);

  return err ? (
    <h1>Something went wrong!</h1>
  ) : (
    info.map((inf) => (
      <section className="home" id="Home" key={inf.id}>
        <img src={inf.img} alt="me" />
        <div className="homeText">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h3>Hello everybody, I'm</h3>
          <h1>Muhammed Ferhan</h1>
          <h2>
            <span>{inf.title}</span> developer
          </h2>
        </div>
        <SocialIcons />
      </section>
    ))
  );
};

export default Home;
