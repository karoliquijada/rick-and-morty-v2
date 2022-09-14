import React from 'react';
import "./episode-card.styles.css";

const EpisodeCard = ({ id, name, air_date }) =>  {
  return (
    <div className='block episode-card'>        
      <p><span>{id}</span> {name}</p>   
      <hr/>
      <p>{air_date}</p>     
    </div>
  );
}

export default EpisodeCard;