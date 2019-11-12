import React, { useState } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
 const [nameSearch, setNameSearch] = useState([]);
  return (
    <section className="search-form">
    <label htmlFor="search">Search by Name: </label>
     <input 
      type="text"
      name="search"
      id="search"
      //value={this.state.search}
      onChange={event => {
        let filterNameSearch = props.characters.filter((character) => {
          return (character.name.toLowerCase().includes(event.target.value.toLowerCase()));
        })
        
        setNameSearch(filterNameSearch);
        console.log(filterNameSearch)
      }} 
      />
      {nameSearch.map(character => { 
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
//if my PROPS Characters includes the letters in my STATE of nameSearch then include that character in the output