import { useEffect, FC } from "react";
import { Table } from "antd";
import { PokemonsColumns } from "./constants/TableConstants";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { PokemonActions } from "../../../redux/actions/PokemonActions";

const PokemonList: FC = () => {
  const { allPokemons } = useTypedSelector((store) => store.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allPokemons.results.length) {
      dispatch(PokemonActions.getAllPokemons());
    }
  }, [allPokemons.results.length, dispatch]);

  return (
    <>
      <Table columns={PokemonsColumns} dataSource={allPokemons?.results} />
    </>
  );
};
export default PokemonList;
