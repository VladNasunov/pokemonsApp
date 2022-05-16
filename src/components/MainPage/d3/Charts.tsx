import { Modal } from "antd";
import * as d3 from "d3";
import { FC, useRef, useState } from "react";
import ChartModal from "./ChartModal";
import CrateCharts from "./CrateCharts";
import StackedChart from "./StackedChart";
import { DataType, dataValues, StackedDataType } from "./types/types";

const stackedData: StackedDataType[] = [
  { date: "Jan", first: 40, second: 60, third: 70 },
  { date: "Feb", first: 35, second: 40, third: 50 },
  { date: "Mar", first: 4, second: 30, third: 45 },
  { date: "Apr", first: 28, second: 50, third: 55 },
  { date: "May", first: 15, second: 20, third: 35 },
];
const stackedDataValues: dataValues[] = [
  { first: 40, second: 60, third: 70 },
  { first: 35, second: 40, third: 50 },
  { first: 4, second: 30, third: 45 },
  { first: 28, second: 50, third: 55 },
  { first: 15, second: 20, third: 35 },
];

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
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const getX = d3
    .scaleBand()
    .domain(data.map((item) => item.date))
    .range([0, ChartWidth])
    .padding(0.25);

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
    <>
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
              onClick={setIsModalVisible}
            />
              {/* <StackedChart
                data={stackedData}
                getX={getX}
                getY={getY}
                stackedDataValues={stackedDataValues}
              /> */}
          </g>
        </svg>
      </div>
      <div>
        <ChartModal
          data={data}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </div>
    </>
  );
};

export default Charts;
