import React, { FC } from "react";
import * as d3 from "d3";
import { DataType } from "./types/types";
import { Tooltip } from "antd";

export type LineChartProps = {
  data: DataType[];
  getX: d3.ScaleBand<string>;
  getY: d3.ScaleLinear<number, number, never>;
};

const LineChart: FC<LineChartProps> = ({ data, getX, getY }) => {
  const linePath = d3
    .line<DataType>()
    .x((d) => getX(d.date)! + getX.bandwidth() / 2)
    .y((d) => getY(d.value))
    .curve(d3.curveMonotoneX)(data);
  return (
    <>
      <path strokeWidth={2} fill="none" stroke="gold" d={linePath!} />
      {data?.map((item) => (
        <g key={item.value}>
          <Tooltip title={`${item.value} ${item.date}`}>
            <circle
              r="4"
              cx={getX(item.date)! + getX.bandwidth() / 2}
              cy={getY(item.value)}
              fill="orange"
            />
          </Tooltip>
        </g>
      ))}
    </>
  );
};

export default LineChart;
