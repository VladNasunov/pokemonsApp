import { useFetchData } from "./hooks/useFetchData";
import * as d3 from "d3";
import { FC } from "react";
import { DataType } from "./types/types";

// const createX = d3
//     .scaleTime()
//     .domain(
//       d3.extent(response, (d) => {
//         return d.date;
//       }) as [Date, Date]
//     )

const BarChart: FC = () => {
  const response = useFetchData();
  const dates = response.map((item) => item.date)

  const createX = d3.scaleBand().domain(dates).range([0, 15000]);
  const createY = d3
    .scaleLinear()
    .domain([0, Math.max(...response.map((item) => item.value))])
    .range([500, 0]);

  const getYAxis = (ref: SVGSVGElement) => {
    const yAxis = d3.axisLeft(createY).tickSize(-600).tickPadding(7);
    d3.select(ref).call(yAxis);
  };

  const getXAxis = (ref: SVGSVGElement) => {
    const xAxis = d3.axisBottom(createX);
    d3.select(ref).call(xAxis);
  };

  const createLine = d3
    .line<DataType>()
    .x((d) => createX(d.date)! + createX.bandwidth() / 2)
    .y((d) => createY(d.value))
    .curve(d3.curveMonotoneX)(response);

  const createArea = d3
    .area<DataType>()
    .x((d) => createX(d.date)! + createX.bandwidth() / 2)
    .y0((d) => createY(d.value))
    .y1((d) => createY(0))
    .curve(d3.curveMonotoneX)(response);

  return (
    <div>
      <svg width="15000" height="1500" overflow="visible">
        <g
          ref={getYAxis}
          style={{ color: "black", marginLeft: "5px" }}
          transform={`translate(30,10)`}
        />
        <g
          ref={getXAxis}
          style={{ color: "black", marginLeft: "5px" }}
          transform={`translate(30,510)`}
        />
        <path
          d={createLine!}
          stroke="blue"
          strokeWidth="3"
          fill="none"
          transform={`translate(30,0)`}
        />
        {/* <path
          d={createArea!}
          fill="blue"
          opacity="0.3"
          transform={`translate(30,0)`}
        /> */}
        <g transform={`translate(30, 0)`}>
          {response.map((item, i) => {
            return (
              <>
                <circle
                  r="14"
                  onClick={() => alert(item.value)}
                  cx={createX(item.date)! + createX.bandwidth() / 2}
                  cy={createY(item.value)}
                  fill="orange"
                />
                <g
                  transform={`translate(${createX(item.date)! + 40}, ${createY(
                    item.value
                  )})`}
                >
                  <rect
                    onClick={() => alert(item.value)}
                    height={510 - createY(item.value)}
                    width="50px"
                    fill="blue"
                    opacity="0.2"
                  />
                </g>
              </>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default BarChart;
