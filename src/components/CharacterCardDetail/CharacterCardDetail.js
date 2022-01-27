import React from 'react';

const CharacterCardDetail = ({ image, name, status, species, gender, origin, currentLocation}) =>  {
  return (
    <div className='character-card-detail'>       
      <img alt ={name} src={image}/>
      <h1 className='card-title-detail'>{name}</h1>
      <div className='card-text-container'>  
        <p><span className='card-span'>Status: </span>{status}</p>  
        <hr/>  
        <p><span className='card-span'>Species: </span>{species}</p>
        <hr/> 
        <p><span className='card-span'>Gender: </span>{gender}</p>
        <hr/> 
        <p><span className='card-span'>Origin: </span>{origin}</p>
        <hr/> 
        <p><span className='card-span'>Current location: </span>{currentLocation}</p>
      </div>  
    </div>
  );
}

export default CharacterCardDetail;