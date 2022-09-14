import React from 'react';
import { Link } from 'react-router-dom';
import "./character-card.styles.css";

const STATUS_STYLES = {
  Alive: "alive",
  Dead: "dead",
  unknown: "unknown"
}

const CharacterCard = ({ id, image, name, species, origin, location, status }) =>  {

  return (
    <Link className='link' to={`/character/${id}`}>
       <div className="card-container block card">
          <p className="card-info">
            <span></span>
            <button className={`block ${STATUS_STYLES[status]} fixed`}>{status}</button>
          </p>
          <div className="card-picture">
            <img src={image} alt="rick sanchez" />
          </div>
          <div className="card-description">
            <p><span>{name}</span></p>
            <p>Species: <span>{species}</span></p>
            <p>Origin: {origin}</p>
            <p>Current Location: {location}</p>
          </div>
        </div>
    </Link> 
  );
}

export default CharacterCard;