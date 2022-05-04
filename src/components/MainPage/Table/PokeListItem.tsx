import { FC } from "react";
import PokemonInfo from "../PokeInfo/PokeInfo";
import { useParams } from "react-router";
import { pokemonAPI } from "../../../services/services";

const PokemonListItem: FC = () => {
  const nameFromQuery = useParams();
  const { data: onePokemon } = pokemonAPI.useGetOnePokemonQuery(
    nameFromQuery?.id
  );
  return (
    <>
      <PokemonInfo data={onePokemon} />
    </>
  );
};
export default PokemonListItem;
