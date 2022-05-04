import { FC } from "react";
import { CurrentPokemonData } from "../../../models/types";
import { Image, Card } from "antd";
import PokemonInfoAbilities from "../PokeAbilities/PokeAbilities";

type PokemonInfoProps = Readonly<{
  data?: CurrentPokemonData;
}>;

const PokemonInfo: FC<PokemonInfoProps> = ({ data }) => {
  const img = data?.sprites.front_default;

  if (!img) return <></>;
  return (
    <>
      <div className="site-card-border-less-wrapper">
        <Card title={data?.name} bordered={false}>
          <div style={{ textAlign: "center" }}>
            <Image width={200} src={img} />
          </div>
          <PokemonInfoAbilities data={data} />
        </Card>
      </div>
    </>
  );
};
export default PokemonInfo;
