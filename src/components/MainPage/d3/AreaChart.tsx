import React, { FC } from "react";
import * as d3 from "d3";
import { DataType, onClickType } from "./types/types";
import { Tooltip } from "antd";

export type AreaChartProps = {
  data: DataType[];
  getX: d3.ScaleBand<string>;
  getY: d3.ScaleLinear<number, number, never>;
  onClick: onClickType;
};

const AreaChart: FC<AreaChartProps> = ({ data, getX, getY, onClick }) => {
  const areaPath = d3
    .area<DataType>()
    .x((d) => getX(d.date)! + getX.bandwidth() / 2)
    .y0((d) => getY(d.value))
    .y1(() => getY(0))
    .curve(d3.curveMonotoneX)(data);
  return (
    <>
      <path
        strokeWidth={3}
        fill="#7cb5ec"
        stroke="#7cb5ec"
        opacity={0.2}
        d={areaPath!}
      />
      {data?.map((item) => (
        <g key={item.value} onClick={() => onClick(true)}>
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

export default AreaChart;
