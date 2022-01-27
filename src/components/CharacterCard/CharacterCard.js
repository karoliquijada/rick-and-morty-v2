import React from 'react';
import { Link } from 'react-router-dom';


const CharacterCard = ({ id, image, name }) =>  {

  return (
    <Link to={`/character/${id}`}>
      <div className='character-card'>
        <div className='card-title-container'>
          <h1 className='card-title'>{name}</h1>  
        </div>     
        <img alt ={name} src={image}/>
      </div>
    </Link> 
  );
}

export default CharacterCard;