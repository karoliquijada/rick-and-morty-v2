import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import EpisodeCard from '../components/EpisodeCard/EpisodeCard';
import { useEpisodes } from '../graphql/custom-hooks';
import Header from "../components/Header/Header";

const EpisodesPage = () => {

  const [page, setPage] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const {error, loading, data} = useEpisodes(page); 

  const fetchEpisodes = () => {
    
  }

  useEffect (() => {

  }, []);
 
 
  if (loading) 
    return <h1 className="page-title">Loading...</h1>;
  if (error) 
    return <h1 className="page-title">Error {error.message}</h1>;
   
  const mappedEpisodes = data.episodes.results.map(ep => (
    <EpisodeCard key = {ep.id} id = {ep.id} name = {ep.name} air_date = {ep.air_date}/>         
  ));
  


  const prev = () => {
    if (page === 1) {
      return;
    }
    setPage(page-1);
  }

  const next = () => {
    const  { pages } = data.episodes.info;
    if (page < pages) {
      setPage(page+1)
    }    

    /* Retornar que no hay mas resultados */
  }
  
  return (
      <div className="App">  
        <Header/>  
        <h1 className="page-title">Welcome to Episodes!</h1> 
        <div className="b-container df">
          <button className="link border" onClick={prev}>Prev</button>   
          <button className="link border" onClick={next}>Next</button>      
        </div>   
        {mappedEpisodes}     
      </div>
    );
}

export default EpisodesPage;
