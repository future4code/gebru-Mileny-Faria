import React, { useState, useEffect } from "react";
import axios from "axios";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [pokemon]);

  useEffect(
    (prevProps) => {
      if (prevProps !== props.pokemon) {
        pegaPokemon(props.pokemon);
      }
    },
    [pokemon]
  );

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}

export default PokeCard;
