import * as d3 from "d3";
import { FC } from "react";
import CrateCharts from "./CrateCharts";
import { DataType } from "./types/types";

type ChartsProps = {
  data: DataType[];
  ChartWidth: number;
  chartHeight: number;
  left: number;
  top: number;
  type: string;
};

const Charts: FC<ChartsProps> = ({
  data = [],
  ChartWidth,
  chartHeight,
  left,
  top,
  type,
}) => {
  const yDomainArray = data.map((item) => item.value);

  const getX = d3
    .scaleBand()
    .domain(data.map((item) => item.date))
    .range([0, ChartWidth]);
  const getXAxis = (ref: SVGSVGElement) => {
    const xAxis = d3.axisBottom(getX);
    d3.select(ref).call(xAxis);
  };

  const getY = d3
    .scaleLinear()
    .domain([0, Math.max(...yDomainArray)])
    .range([chartHeight, 0]);
  const getYAxis = (ref: SVGSVGElement) => {
    const yAxis = d3.axisLeft(getY).tickSize(-ChartWidth).tickPadding(8);
    d3.select(ref).call(yAxis);
  };

  return (
    <div>
      <svg width={1000} height={350} overflow="visible">
        <g transform={`translate(${left},${top})`}>
          <g ref={getXAxis} transform={`translate(0,${getY(0)})`} />
          <g ref={getYAxis} />
          <CrateCharts
            data={data}
            chartHeight={chartHeight}
            getX={getX}
            getY={getY}
            type={type}
          />
        </g>
      </svg>
    </div>
  );
};

export default Charts;
