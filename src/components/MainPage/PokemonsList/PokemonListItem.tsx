import React, { useEffect, useState, FC } from "react";
import PokemonInfo from "../Pokemons/PokemonInfo";
import { fetchPokemons } from "../../services/services";
import { CurrentPokemonData } from "../../models/types";
import { useParams } from "react-router";

const PokemonListItem: FC = () => {
  const [pokemonData, setPokemonData] = useState<CurrentPokemonData>();
  const nameFromQuery = useParams();

  useEffect(() => {
    getPokemonData();
  }, []);

  const getPokemonData = async () => {
    const data = await fetchPokemons(`/${nameFromQuery.id}`);
    setPokemonData(data);
  };

  return (
    <>
      <PokemonInfo data={pokemonData} />
    </>
  );
};
export default PokemonListItem;
