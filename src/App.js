import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home-page';
import CharactersPage from './pages/characters-page';
import EpisodesPage from './pages/episodes-page'
import CharacterPage from './pages/character-page';
import CharacterDetailPage from './pages/character-detail-page';

const App = () => {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/characters" element={<CharactersPage/>}/>
        <Route path="/episodes" element={<EpisodesPage/>}/>
        <Route path="/character/" element={<CharacterPage/>}/>
        <Route path="/character/:characterId" element={<CharacterDetailPage/>}/>
     </Routes>
    </div>
  );
}

export default App;

{/* <Route path="/character/" element={<CharacterPage/>}>
<Route path=":characterId" element={<CharacterDetailPage/>}/>
</Route> */}
