import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList2() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  

  
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(`useEffect error in CharacterList2: ${error}`);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  let filteredCharacters = characters.filter(
    (character) => {
      return character.name.toLowerCase().indexOf(character.name.toLowerCase()) !== -1;
    }
  );//this.props.characters.filter();
  return (
    <section className="character-list">
      <SearchForm 
      characters={characters}
      />
     
        {filteredCharacters.map(character => { //filteredCharacters used to be characters
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
