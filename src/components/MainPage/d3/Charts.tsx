import { FC, useRef, useState } from "react";
import ChartModal from "./ChartModal";
import CrateCharts from "./CrateCharts";
import { useData } from "./hooks/useData";
import { useXAxis } from "./hooks/useXAxis";
import { useXScale } from "./hooks/useXScale";
import { useYAxis } from "./hooks/useYAxis";
import { useYScale } from "./hooks/useYScale";
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
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const yDomainArray = data.map((item) => item.value);
  const xdomainData = data.map((item) => item.date);
  const xAxisRef = useRef<SVGSVGElement | null>(null);
  const yAxisRef = useRef<SVGSVGElement | null>(null);

  const preparedData = useData(data, type);

  const xScale = useXScale(xdomainData, ChartWidth);
  const yScale = useYScale(chartHeight, [0, Math.max(...yDomainArray)]);

  useXAxis(xAxisRef.current!, xScale, yScale);
  useYAxis(yAxisRef.current!, yScale);

  return (
    <>
      <div>
        <svg width={1000} height={350} overflow="visible">
          <g transform={`translate(${left},${top})`}>
            <g ref={xAxisRef} transform={`translate(0,${yScale(0)})`} />
            <g ref={yAxisRef} />
            <CrateCharts
              data={data}
              chartHeight={chartHeight}
              getX={xScale}
              getY={yScale}
              type={type}
              onClick={setIsModalVisible}
            />
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
