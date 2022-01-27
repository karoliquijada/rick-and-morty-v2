import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className="App h">
        <Header/>
        <h1 className="page-title">You pick it, Rick!</h1>
        <div className="h-container df">
          <Link className="link" to="/characters">Characters</Link>
          <Link className="link" to="/character">Character</Link>
          <Link className="link" to="/episodes">Episodes</Link>
        </div>  
        
        <img className="img-home" alt="rick-and-morty" 
            src="https://i.ibb.co/wSTkmNL/pngegg.png"
        />      
      </div>
    );
}

export default Home;
  