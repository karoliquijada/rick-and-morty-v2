import React from 'react';

const EpisodeCard = ({ id, name, air_date }) =>  {
  return (
    <div className='episode-card'>        
      <p><span>{id}</span> {name}</p>   
      <hr/>
      <p>{air_date}</p>     
    </div>
  );
}

export default EpisodeCard;