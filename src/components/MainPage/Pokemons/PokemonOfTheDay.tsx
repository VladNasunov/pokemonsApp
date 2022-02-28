import { useEffect, FC, useCallback } from "react";
import { Button } from "antd";
import PokemonInfo from "./PokemonInfo";
import { useDispatch } from "react-redux";
import { PokemonActions } from "../../../redux/actions/PokemonActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { randomPokemon } from "../../../utils/utils";

const PokemonOfTheDay: FC = () => {
  const { onePokemon } = useTypedSelector((store) => store.pokemons);

  const dispatch = useDispatch();

  const getPokemonData = useCallback(() => {
    dispatch(PokemonActions.getOnePokemon(randomPokemon()));
  }, [dispatch]);

  useEffect(() => {
    getPokemonData();
  }, [getPokemonData]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button onClick={getPokemonData}>Next Pokemon</Button>
      <PokemonInfo data={onePokemon} />
    </div>
  );
};
export default PokemonOfTheDay;
