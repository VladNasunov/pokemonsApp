import { FC, useState } from "react";
import { useFetchData } from "./hooks/useFetchData";
import Charts from "./Charts";
import { DataType } from "./types/types";
import Stacked2 from "./Stacked2Container";

const data: DataType[] = [
  { date: "Jan", value: 40 },
  { date: "Feb", value: 35 },
  { date: "Mar", value: 4 },
  { date: "Apr", value: 28 },
  { date: "May", value: 15 },
];

const ChartContainer: FC = () => {
  const chartData = useFetchData();
  return (
    <>
      <Stacked2 />
      <Charts
        data={chartData}
        ChartWidth={1000}
        chartHeight={300}
        left={20}
        top={10}
        type="area"
      />
      <Charts
        data={data}
        ChartWidth={500}
        chartHeight={300}
        left={20}
        top={10}
        type="bar"
      />
      <Charts
        data={data}
        ChartWidth={500}
        chartHeight={300}
        left={20}
        top={10}
        type="barLine"
      />
    </>
  );
};

export default ChartContainer;
