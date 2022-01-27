import {React, useState} from "react";
import { Link } from "react-router-dom";
import { useCharacterByName } from "../graphql/custom-hooks";
import CharacterCardDetail from "../components/CharacterCardDetail/CharacterCardDetail";
import SearchBox from "../components/SearchBox/SearchBox";
import Header from "../components/Header/Header";

const CharacterPage = () => {

  const [page, setPage] = useState(1);
  const [nameToSearch, setNameToSearch] = useState('');
  const [name, setName] = useState('');
  const { error, loading, data } = useCharacterByName(page, nameToSearch); 
 
  if (loading) return  <h1 className="page-title">Loading...</h1>;
  if (error) return <h1 className="page-title">Error {error.message}</h1>;   
  
  const mappedCharacters = data.characters.results.map(character => (
    <CharacterCardDetail 
        key = {character.id} 
        image = {character.image} 
        name = {character.name}
        status = {character.status} 
        species = {character.species} 
        gender = {character.gender} 
        origin = {character.origin.name} 
        currentLocation = {character.location.name} 
    />         
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
  }

  const onChange  = (e) => {
    setName(e.target.value); 
    console.log('Name onChange', name);
  }

  const onClick  = (e) => {
    setPage(1);
    setNameToSearch(name); 
   }
  
  return (
    <div className="App">
      <Header/>
      <h1 className="page-title">Welcome to Character!</h1>
      <SearchBox onChange={onChange} onClick={onClick}/> 
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

export default CharacterPage;
  