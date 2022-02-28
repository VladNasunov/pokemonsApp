import React, { useEffect, FC } from "react";
import PokemonInfo from "../Pokemons/PokemonInfo";
import { useParams } from "react-router";
import { PokemonActions } from "../../../redux/actions/PokemonActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";

const PokemonListItem: FC = () => {
  const nameFromQuery = useParams();
  const dispatch = useDispatch();
  const { onePokemon } = useTypedSelector((store) => store.pokemons);

  useEffect(() => {
    dispatch(PokemonActions.getOnePokemon(`${nameFromQuery.id}`));
  }, [nameFromQuery.id, dispatch]);

  return (
    <>
      <PokemonInfo data={onePokemon} />
    </>
  );
};
export default PokemonListItem;
