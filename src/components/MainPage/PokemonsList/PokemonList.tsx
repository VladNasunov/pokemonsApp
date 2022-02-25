import React, { useEffect, useState, FC } from "react";
import { fetchPokemons } from "../../services/services";
import { PokemonDataResponse } from "../../models/types";
import { Table } from "antd";
import { PokemonsColumns } from "./constants/TableConstants";

const PokemonList: FC = () => {
  const [pokemonsData, setPokemonsData] = useState<PokemonDataResponse>();

  const getPokemonData = async () => {
    const data = await fetchPokemons();
    setPokemonsData(data);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <>
      <Table columns={PokemonsColumns} dataSource={pokemonsData?.results} />
    </>
  );
};
export default PokemonList;
