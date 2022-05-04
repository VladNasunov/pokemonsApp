import { useState, FC } from "react";
import { Button, Card } from "antd";
import SelectPokemon from "../SelectPoke/SelectPokemon";
import { CurrentPokemonData } from "../../../models/types";
import PokemonFightInfo from "./PokeFightInfo";
import { pokemonAPI } from "../../../services/services";

const Charts: FC = () => {
  const [firstOpponent, setFirstOpponent] = useState<CurrentPokemonData>();
  const [secondOpponent, setSecondOpponent] = useState<CurrentPokemonData>();
  const [winner, setWinner] = useState<any>();

  const { data: allPokemons = [] } = pokemonAPI.useGetAllPokemonsQuery();

  const getWinner = () => {
    firstOpponent &&
    secondOpponent &&
    firstOpponent?.base_experience > secondOpponent?.base_experience
      ? setWinner(firstOpponent?.name)
      : setWinner(secondOpponent?.name);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SelectPokemon
          pokemonsData={allPokemons}
          value={firstOpponent}
          setValue={setFirstOpponent}
        />
        <SelectPokemon
          pokemonsData={allPokemons}
          value={secondOpponent}
          setValue={setSecondOpponent}
        />
      </div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Button onClick={getWinner}>Fight</Button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <PokemonFightInfo data={firstOpponent} />
        <div>
          {winner && (
            <Card bordered={false} style={{ background: "blue" }}>
              <h1>{`Winner ${winner}`}</h1>
            </Card>
          )}
        </div>
        <PokemonFightInfo data={secondOpponent} />
      </div>
    </>
  );
};

export default Charts;
