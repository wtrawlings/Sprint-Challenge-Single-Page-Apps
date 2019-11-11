import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import CharacterList from "./CharacterList";
import WelcomePage from "./WelcomePage";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link exact to="/"><h2>home</h2></Link>
      <Link exact to="/characters"><h2>characters</h2></Link>
      <Route exact path="/" component={WelcomePage} />
    <Route exact path="/characters" component={CharacterList} />
    </header>
    
    
    
  );
}
