import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/1`)
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
        
      })
      .catch(error => {
        console.log(`useEffect error in CharacterList: ${error}`);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {characters.map((character, id) =>{
        return (
          <div>
          <CharacterCard 
            name={character.name}
            id={character.id}
            origin={character.origin}
            image={character.image}
          />
        </div>
        )
      })}
      
    </section>
  );
}
