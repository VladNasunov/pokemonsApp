import { FC } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { CurrentPokemonData } from "../../../models/types";

type PokemonChartProps = {
  PokemonData?: CurrentPokemonData;
};

const PokemonChart: FC<PokemonChartProps> = ({ PokemonData }) => {
  const newData = [{ ...PokemonData }];
  
  return (
    <BarChart width={400} height={200} data={newData}>
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="base_experience" fill="#82ca9d" />
      <Bar dataKey="height" fill="#8884d8" />
      <Bar dataKey="weight" fill="#8884d8" />
    </BarChart>
  );
};

export default PokemonChart;
