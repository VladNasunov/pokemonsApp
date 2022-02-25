import React, { useEffect, useState, FC } from "react";
import { fetchRandomPokemon } from "../../services/services";
import { CurrentPokemonData } from "../../models/types";
import { Button } from "antd";
import PokemonInfo from "./PokemonInfo";

const PokemonOfTheDay: FC = () => {
  const [pokemonData, setPokemonData] = useState<CurrentPokemonData>();

  useEffect(() => {
    getPokemonData();
  }, []);

  const getPokemonData = async () => {
    const data = await fetchRandomPokemon();
    setPokemonData(data);
  };

  return (
    <div style={{display: 'flex', flexDirection:'column'}}>
      <Button onClick={getPokemonData}>Next Pokemon</Button>
      <PokemonInfo data={pokemonData} />
    </div>
  );
};
export default PokemonOfTheDay;
