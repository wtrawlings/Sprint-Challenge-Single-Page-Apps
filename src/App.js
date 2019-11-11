import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
  return (
    <main>
      <Header />
      {/* GRRRR WHY DON'T MY ROUTES WORK??? */}
      <Route exact path="/"><WelcomePage /></Route>
      <Route exact path="/characters"><CharacterList /></Route>
    </main>
  );
}

