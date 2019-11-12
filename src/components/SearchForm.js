import React, { useState } from "react";

export default function SearchForm() {
 const [nameSearch, setNameSearch] = useState("");
  return (
    <section className="search-form">
    <label htmlFor="search">Search by Name: </label>
     <input 
      type="text"
      name="search"
      id="search"
      //value={this.state.search}
      onChange={event =>{
        setNameSearch(event.target.value);
        //console.log(nameSearch)
      }} 
      />
    
    </section>
      

  );
}
