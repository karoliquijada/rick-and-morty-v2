import React from "react";
import "./Header.styles.css";
import { Link } from "react-router-dom";

const Header = ({title}) => {
  return (
    <div className="header-container">
      <header>
        <Link className="link block" to="/">
          Home
        </Link>
        <Link className="link block" to="/characters">
          Personajes
        </Link>
        <Link className="link block" to="/episodes">
          Episodes
        </Link>
      </header>
      <h1 className="page-title">{title}</h1>
    </div>
  );
};
export default Header;
