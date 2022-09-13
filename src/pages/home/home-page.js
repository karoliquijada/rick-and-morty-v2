import React from "react";
import Image from "../../assets/Rick-y-Morty.jpg";
import { Link } from "react-router-dom";
import "./home-page.styles.css";

const Home = () => {
  return (
    <div className="home">
      <div className="img-container">
        <img src={Image} alt="Rick y Morty" />
      </div>
      <div className="container">
        <h1 className="page-title">✌ Rick & Morty Wiki </h1>
        <p className="block fixed">
          Esta es una wiki que utiliza la API de Rick & Morty. Aquí podrás ver los personajes
          en el botón de personajes y conocer también los episodios.
        </p>
        <div className="navigation">
          <Link className="block" to="/characters">
            Characters
          </Link>
          <Link className="block" to="/episodes">
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
