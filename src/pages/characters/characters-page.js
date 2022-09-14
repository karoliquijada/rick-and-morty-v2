import { React, useState} from "react";
import Pagination from "../../components/Pagination/pagination";
import CharacterCard from "../../components/CharacterCard/character-card";
import { useCharacters } from "../../graphql/custom-hooks";
import Header from "../../components/Header/Header";
import "./characters-page.styles.css";

const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useCharacters(page);

  //Revisar si le puedo el estado como un prop y que me devuelva solo el valor
  const prev = () => {
    if(page !== 1)
      setPage(page - 1);
  };

  const next = () => {
    if(page !== 42)
      setPage(page + 1);
  };

  return (
    <div>
      <Header title={"Personajes"} />
      <Pagination onPrev={prev} onNext={next}/>     
      <div className="characters-container">
        {loading ? (
          <h2 className="page-title block alive  loading">Loading...</h2>
        ) : error ? (
          <h2 className="page-title block dead fixed loading">{error.message}</h2>
        ) : (
          <div className="cards-container">
            {data.characters.results.map((character) => {
              return (
                <CharacterCard
                  key={character.id}
                  id={character.id}
                  image={character.image}
                  name={character.name}
                  species={character.species}
                  origin={character.origin.name}
                  location={character.location.name}
                  status={character.status}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CharactersPage;
