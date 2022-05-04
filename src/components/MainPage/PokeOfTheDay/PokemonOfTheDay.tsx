import { useEffect, FC, useCallback } from "react";
import { Button } from "antd";
import PokemonInfo from "../PokeInfo/PokeInfo";
import { useDispatch } from "react-redux";
import { PokemonActions } from "../../../redux/actions/PokemonActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { randomPokemon } from "../../../utils/utils";
import { Spin } from "antd";
import { pokemonAPI } from "../../../services/services";

const PokemonOfTheDay: FC = () => {
  const {
    data: onePokemon,
    isLoading,
    refetch,
  } = pokemonAPI.useGetOnePokemonQuery(10);
  // const { onePokemon, loading } = useTypedSelector((store) => store.pokemons);

  // const dispatch = useDispatch();

  // const getPokemonData = useCallback(() => {
  //   dispatch(PokemonActions.getOnePokemon(randomPokemon()));
  // }, [dispatch]);

  // useEffect(() => {
  //   num = randomPokemon()
  // }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <Button onClick={()=> refetch}>Next Pokemon</Button>
          <PokemonInfo data={onePokemon} />
        </>
      )}
    </div>
  );
};
export default PokemonOfTheDay;
