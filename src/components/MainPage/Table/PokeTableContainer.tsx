import { PokemonResults } from "../../../models/types";
import { pokemonAPI } from "../../../services/services";
import { PokeTableColumns } from "./constants/TableConstants";
import TableWithSorting from "./TableWithSorting";

const PokeTableContainer = () => {
  const { data = [], isLoading } = pokemonAPI.useGetAllPokemonsQuery();
  return (
    <div>
      <TableWithSorting<PokemonResults>
        columns={PokeTableColumns}
        data={data}
        isLoading={isLoading}
      />
    </div>
  );
};

export default PokeTableContainer;
