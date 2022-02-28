import { useEffect, useState, FC } from "react";
import { Button } from "antd";
import SelectPokemon from "./SelectPokemon";
import { PokemonActions } from "../../../redux/actions/PokemonActions";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { CurrentPokemonData } from "../../../models/types";
import PokemonInfo from "../Pokemons/PokemonInfo";

const Charts: FC = () => {
  const [firstOpponent, setFirstOpponent] = useState<CurrentPokemonData>();
  const [secondOpponent, setSecondOpponent] = useState<CurrentPokemonData>();
  const [winner, setWinner] = useState<any>();
  const dispatch = useDispatch();
  const { allPokemons } = useTypedSelector((store) => store.pokemons);

  useEffect(() => {
    dispatch(PokemonActions.getAllPokemons());
  }, [dispatch]);

  const getWinner = () => {
    firstOpponent &&
    secondOpponent &&
    firstOpponent?.base_experience > secondOpponent?.base_experience
      ? setWinner(firstOpponent?.name)
      : setWinner(secondOpponent?.name);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <SelectPokemon
          pokemonsData={allPokemons.results}
          value={firstOpponent}
          setValue={setFirstOpponent}
        />
        <SelectPokemon
          pokemonsData={allPokemons.results}
          value={secondOpponent}
          setValue={setSecondOpponent}
        />
      </div>
      <div>{winner && `winner ${winner}`}</div>
      <Button style={{ margin: "0px auto" }} onClick={getWinner}>
        Fight
      </Button>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <PokemonInfo data={firstOpponent} />
        <PokemonInfo data={secondOpponent} />
      </div>
    </>
  );
};

export default Charts;
