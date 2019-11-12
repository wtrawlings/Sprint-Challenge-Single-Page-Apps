import React from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
  return (
    <main>
      <Header />
      {/* GRRRR WHY DON'T MY ROUTES WORK??? */}

      {/* <Router>
        <Link to="/"><h3>home</h3></Link>
        <Link to="/characters"><h3>characters</h3></Link>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/characters" component={CharacterList} />
      </Router> */}

      {/*<Route exact path="/"><WelcomePage /></Route>*/}
      {/*<Route exact path="/characters"><CharacterList /></Route>*/}
    </main>
  );
}

