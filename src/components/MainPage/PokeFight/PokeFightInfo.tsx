import { FC } from "react";
import { CurrentPokemonData } from "../../../models/types";
import { Image, Card } from "antd";
import PokemonChart from "../Chart/PokemonChart";

type PokemonFightInfoProps = Readonly<{
  data?: CurrentPokemonData;
}>;

const PokemonFightInfo: FC<PokemonFightInfoProps> = ({ data }) => {
  const img = data?.sprites.front_default;

  if (!img) return <></>;
  return (
    <>
      <div className="site-card-border-less-wrapper">
        <Card title={data?.name} bordered={false}>
          <div style={{ textAlign: "center" }}>
            <Image width={200} src={img} />
          </div>
          <PokemonChart PokemonData={data} />
        </Card>
      </div>
    </>
  );
};
export default PokemonFightInfo;
