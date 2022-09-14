import {React, useState} from "react";
import Pagination from "../../components/Pagination/pagination";
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import { useEpisodes } from '../../graphql/custom-hooks';
import Header from "../../components/Header/Header";

const EpisodesPage = () => {

  const [page, setPage] = useState(1);
  const {error, loading, data} = useEpisodes(page); 
 
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
        <Header title={"📺 Episodios"}/>  
        <Pagination onPrev={prev} onNext={next}/>
        <div className="characters-container">
        {loading ? (
          <h2 className="page-title block alive  loading">Loading...</h2>
        ) : error ? (
          <h2 className="page-title block dead fixed loading">{error.message}</h2>
        ) : (
          <div className="cards-container">
            {data.episodes.results.map(episode => {
              return (
                <EpisodeCard key = {episode.id} id = {episode.id} name = {episode.name} air_date = {episode.air_date}/>    
              );
            })}
          </div>
        )}
      </div>
          
      </div>
    );
}

export default EpisodesPage;
