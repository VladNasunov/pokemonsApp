import { FC } from "react";
import { CurrentPokemonData, PokemonResults } from "../../../models/types";

type PokemonInfoProps = Readonly<{
  data?: CurrentPokemonData;
}>;

const PokemonInfoAbilities: FC<PokemonInfoProps> = ({ data }) => {
  const { abilities = [], types = [], moves = [] } = data as CurrentPokemonData;

  if (!data) return <></>;

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h3>Abilities</h3>
        {abilities.map((e) => (
          <div>{e.ability.name}</div>
        ))}
      </div>
      <div>
        <h3>Elements</h3>
        {types.map((e) => (
          <div>{e.type.name}</div>
        ))}
      </div>
      <div>
        <h3>Moves</h3>
        {moves.map((e) => (
          <div>{e.move.name}</div>
        ))}
      </div>
    </div>
  );
};
export default PokemonInfoAbilities;
