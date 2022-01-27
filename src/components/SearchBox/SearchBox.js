import React from 'react';

const SearchBox = ({ onChange, onClick}) =>  {
  return (
    <div>
         <input className="filter" 
          type="search" 
          placeholder="Ingrese el nombre del personaje" 
          onChange={onChange}
          />
        <button className="link border"type="submit" onClick={onClick}>Buscar</button>       
    </div>
  );
}

export default SearchBox;