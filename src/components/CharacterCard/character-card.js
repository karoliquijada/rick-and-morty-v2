import React from 'react';
import { Link } from 'react-router-dom';
import "./character-card.styles.css";


const CharacterCard = ({ id, image, name }) =>  {

  return (
    <Link to={`/character/${id}`}>
      <div className='character-card'>
        <div className='card-img'>
          <img alt ={name} src={image}/>
        </div>
        <div className='card-title-container'>
          <h1 className='card-title'>{name}</h1>  
        </div>     
       
      </div>
    </Link> 
  );
}

export default CharacterCard;