import { FC } from "react";
import { Select } from "antd";
import { CurrentPokemonData, PokemonResults } from "../../../models/types";
import { getOpponent } from "../../../services/services";
import { useAsync } from "../../../hooks/useAsync";
// import { useAsync } from "../../../hooks/useAsync";

type SelectPokemonProps = {
  pokemonsData?: PokemonResults[];
  value?: CurrentPokemonData;
  setValue: any;
};

const SelectPokemon: FC<SelectPokemonProps> = ({
  pokemonsData,
  value,
  setValue,
}) => {
  const { Option } = Select;

  const getPokemonsOpponent = async (name: any) => {
    const opponent = await getOpponent(name);
    setValue(opponent);
  };
  return (
    <>
      <Select
        style={{ width: 500 }}
        onChange={(name) => getPokemonsOpponent(name)}
        value={value?.name}
        defaultValue="Choose your Pokemon"
      >
        {pokemonsData?.map((item) => (
          <Option value={`${item.name}`}>{item.name}</Option>
        ))}
      </Select>
    </>
  );
};

export default SelectPokemon;
