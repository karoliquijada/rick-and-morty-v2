import React from "react";
import "./Header.styles.css";
import { Link } from "react-router-dom";

const Header = ({title = "titulo"}) => {
  return (
    <div>
      <header>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/characters">
          Personajes
        </Link>
        <Link className="link" to="/episodes">
          Episodes
        </Link>
      </header>
      <h1 className="title">{title}</h1>
    </div>
  );
};
export default Header;
