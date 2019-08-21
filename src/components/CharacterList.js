import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  console.log("characters", characters);

  return (
    // <section className="character-list grid-view">
    <h2 className=" character-list grid-view character-cards">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </h2>
    // </section>
  );
}
