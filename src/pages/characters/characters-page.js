import { React, useState, useEffect } from "react";
import CharacterCard from "../../components/CharacterCard/character-card";
import { useCharacters } from "../../graphql/custom-hooks";
import Header from "../../components/Header/Header";
import "./characters-page.styles.css";

const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const { loading, error, data } = useCharacters(page);

  useEffect(() => {
    if (data) {
      const mappedCharacters = data.characters.results.map((character) => (
        <CharacterCard key={character.id} id={character.id} image={character.image} name={character.name} />
      ));
      setCharacters(mappedCharacters);
      console.log('info: ',data.characters);
    }
  }, [page]);

  const prev = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
    console.log("Prev" + page);
  };

  const next = () => {
    const { pages } = data.characters.info;
    if (page < pages) {
      setPage(page + 1);
      console.log("Next" + page);
    }
    /* Retornar que no hay mas resultados */
  };

  return (
    <div>
      <Header title={"Personajes"} />
      <div className="pagination">
        <button className="" onClick={prev}>
          Prev
        </button>
        <button className="" onClick={next}>
          Next
        </button>
      </div>
      <div className="characters-container">
        {loading ? <h1 className="page-title">Loading...</h1> : characters}
        {error ? <h1 className="page-title">error...</h1> : ""}
      </div>
    </div>
  );
};

export default CharactersPage;
