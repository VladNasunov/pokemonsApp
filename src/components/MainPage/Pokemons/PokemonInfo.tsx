import React, { FC } from "react";
import { CurrentPokemonData, PokemonCardData } from "../../models/types";
import { Image, Card } from "antd";

type PokemonInfoProps = Readonly<{
  data?: CurrentPokemonData;
}>;

const PokemonInfo: FC<PokemonInfoProps> = ({ data }) => {
  const imgSource = data?.sprites.front_default;
  const { order, weight, height, base_experience } =
    data || ({} as PokemonCardData);
  return (
    <div style={{ margin: "0px auto" }}>
      <Image width={200} src={imgSource} />
      <div className="site-card-border-less-wrapper">
        <Card
          title={data?.name}
          bordered={false}
          style={{ width: 300, textAlign: "center" }}
        >
          <h5 style={{ width: `${base_experience}%`, background: "blue" }}>
            Experience {base_experience}
          </h5>
          <h5 style={{ maxWidth: `${height}%`, background: "blue" }}>
            Height {height}
          </h5>
          <h5 style={{ width: `${weight}%`, background: "blue" }}>
            Weight {weight}
          </h5>
          <h5 style={{ width: `${order}%`, background: "blue" }}>
            Order {order}
          </h5>
        </Card>
      </div>
    </div>
  );
};
export default PokemonInfo;
