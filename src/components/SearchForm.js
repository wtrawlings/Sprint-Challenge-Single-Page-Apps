import React, { useState } from "react";

export default function SearchForm() {
 const [search, setSearch] = useState("");
  return (
    <section className="search-form">
    <label htmlFor="search">Search by Name: </label>
     <input 
      type="text"
      name="search"
      id="search"
      //value={this.state.search}
      //onChange={this.updateSearch.bind(this)} 
      //check your onChange and value
      />
    
    </section>
  );
}
