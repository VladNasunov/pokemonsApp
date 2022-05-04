import { FC } from "react";
import { DataType } from "./types/types";
import { Tooltip } from "antd";

export type BarChartProps = {
  data: DataType[];
  getX: d3.ScaleBand<string>;
  getY: d3.ScaleLinear<number, number, never>;
  chartHeight: number;
};

const BarChart: FC<BarChartProps> = ({ data, getX, getY, chartHeight }) => {
  return (
    <>
      {data?.map((item) => (
        <g key={item.value}>
          <Tooltip title={`${item.value} ${item.date}`}>
            <g transform={`translate(${getX(item.date)}, ${getY(item.value)})`}>
              <rect
                width={getX.bandwidth() - 20}
                height={chartHeight - getY(item.value)}
                fill="blue"
                opacity="0.4"
                transform={`translate(${10})`}
              />
            </g>
          </Tooltip>
        </g>
      ))}
    </>
  );
};

export default BarChart;
