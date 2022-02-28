import { FC } from "react";
import { CurrentPokemonData } from "../../../models/types";
import { Image, Card } from "antd";
import PokemonChart from "../Chart/PokemonChart";
import styles from "./Pokemon.module.css";

type PokemonInfoProps = Readonly<{
  data?: CurrentPokemonData;
}>;

const PokemonInfo: FC<PokemonInfoProps> = ({ data }) => {
  const img = data?.sprites.front_default;

  if (!img) return <></>;

  return (
    <>
      <Image width={200} src={img} className={styles.align} />
      <div className="site-card-border-less-wrapper">
        <Card title={data?.name} bordered={false}>
          <PokemonChart PokemonData={data} />
        </Card>
      </div>
    </>
  );
};
export default PokemonInfo;
