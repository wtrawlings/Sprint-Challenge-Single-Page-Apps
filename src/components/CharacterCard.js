import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <div className="CharacterCard">
        <h2>Name: {props.name}</h2>
        <p>ID: {props.id}</p> 
        <p>Origin: {props.origin}</p> 
      </div>
      <div>
        <img src={props.image} alt={props.name} /> 
      </div>
     </div>
  );
}

