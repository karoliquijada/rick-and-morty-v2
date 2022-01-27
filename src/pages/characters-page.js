import {React, useState} from "react";
import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import { useCharacters } from "../graphql/custom-hooks";
import Header from "../components/Header/Header";

const CharactersPage = () => {

  const [page, setPage] = useState(1);
  const { error, loading, data } = useCharacters(page); 
 
  if (loading) return  <h1 className="page-title">Loading...</h1>;
  if (error) return <h1 className="page-title">Error {error.message}</h1>; 
  
  const mappedCharacters = data.characters.results.map(character => (
    <CharacterCard key = {character.id} id = {character.id} image = {character.image} name = {character.name}/>         
  ));
  
  const prev = () => {
    if (page === 1) {
      return;
    }
    setPage(page-1);
    console.log('Prev'+ page);
  }

  const next = () => {
    const  { pages } = data.characters.info;
    if (page < pages) {
      setPage(page+1)
      console.log('Next'+page);
    }    
    /* Retornar que no hay mas resultados */
  }
  
  return (
    <div>
      <Header/>
      <h1 className="page-title">Welcome to Characters!</h1>

      <div className="b-container df">
        <button className="link border" onClick={prev}>Prev</button>   
        <button className="link border" onClick={next}>Next</button>      
      </div>      
      <div className="items-container">
        {mappedCharacters}   
      </div>  
          
    </div>
  );
}

export default CharactersPage;
  