import {React} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCharacter } from "../graphql/custom-hooks";
import CharacterCardDetail from "../components/CharacterCardDetail/CharacterCardDetail";
import Header from "../components/Header/Header";

const CharacterDetailPage = () => {
   
    const { characterId } = useParams();
    const { error, loading, data } = useCharacter(characterId);
 
    if (loading) return  <h1 className="page-title">Loading...</h1>;
    if (error) return <h1 className="page-title">Error {error.message}</h1>; 

    const { name, status, species, gender, origin, location, image } = data.character;
 
 
    console.log(data);
    
    return (
        <div>
            <Header/> 
            <h1 className="page-title">Welcome to {name}!</h1>
            <CharacterCardDetail
                image = {image}
                name = {name}
                status = {status}
                species = {species}
                gender = {gender}
                origin = {origin.name}
                currentLocation = {location.name}
            /> 
        </div>
    );
}

export default CharacterDetailPage;
  