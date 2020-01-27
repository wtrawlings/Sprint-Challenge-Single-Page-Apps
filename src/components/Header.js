import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CharacterList from "./CharacterList";
import CharacterList2 from "./CharacterList2";
import WelcomePage from "./WelcomePage";
import SearchForm from "./SearchForm";


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Router>
        <Link to="/"><h3>home</h3></Link>
        <Link to="/characters"><h3>characters</h3></Link>
        <Link to="/search"><h3>search</h3></Link>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/characters" component={CharacterList} />
        <Route path="/search" component={CharacterList2} />
      </Router>
      
    </header>
    
    
    
  );
}
