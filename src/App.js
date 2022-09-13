import { Routes, Route } from "react-router-dom";
import Home from './pages/home/home-page';
import CharactersPage from './pages/characters/characters-page';
import EpisodesPage from './pages/episodes/episodes-page';
import './App.css';
import './assets/block.css';

const App = () => {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/characters" element={<CharactersPage/>}/>
        <Route path="/episodes" element={<EpisodesPage/>}/>
     </Routes>
    </div>
  );
}

export default App;