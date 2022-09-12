import React from "react";
import image from "../../assets/Rick-y-Morty.jpg";
import { Link } from "react-router-dom";
import "./home-page.styles.css";

const Home = () => {
  return (
    <div className="home">
      <div className="img-container">
        <img src={image} alt="bg" />
      </div>
      <div className="navigation">
        <div className="links-container">
          <Link className="link" to="/characters">
            Characters
          </Link>
          <Link className="link" to="/episodes">
            Episodes
          </Link>
        </div>
        <footer>
          <p>Coded and design by @iGirliCode</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
