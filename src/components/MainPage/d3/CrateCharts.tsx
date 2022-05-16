import { Attributes, FC } from "react";
import { DataType, onClickType } from "./types/types";
import * as d3 from "d3";
import AreaChart, { AreaChartProps } from "./AreaChart";
import BarChart, { BarChartProps } from "./BarChart";
import LineChart, { LineChartProps } from "./LineChart";

type RenderChartProps = {
  data: DataType[];
  chartHeight: number;
  getX: d3.ScaleBand<string>;
  getY: d3.ScaleLinear<number, number, never>;
  type: string;
  onClick: onClickType;
};

const createChart = (
  type: string,
  props: (Attributes & AreaChartProps) | LineChartProps | BarChartProps
) => {
  switch (type) {
    case "area":
      return <AreaChart {...(props as AreaChartProps)} />;
    case "line":
      return <LineChart {...(props as LineChartProps)} />;
    case "barLine":
      return (
        <>
          <LineChart {...(props as LineChartProps)} />
          <BarChart {...(props as BarChartProps)} />
        </>
      );
    default:
      return <BarChart {...(props as BarChartProps)} />;
  }
};

const RenderChart: FC<RenderChartProps> = ({
  data,
  getX,
  getY,
  chartHeight,
  type,
  onClick,
}) => {
  return createChart(type, { data, getX, getY, chartHeight, onClick });
};

export default RenderChart;
