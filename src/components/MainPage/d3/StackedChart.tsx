import React, { FC, useRef, useEffect } from "react";
import { colorType, keyType, stackedData } from "./Stacked2Container";
import * as d3 from "d3";
import { useXAxis } from "./hooks/useXAxis";
import { useYScale } from "./hooks/useYScale";
import { useYAxis } from "./hooks/useYAxis";
import { stackOrderAscending } from "d3";
import { useXScale } from "./hooks/useXScale";

export type Chacked2Props = {
  data: stackedData[];
  keys: keyType[];
  colors: colorType;
};

const width = 600;
const height = 400;
const left = 50;
const top = 0;
const Chacked2: FC<Chacked2Props> = ({ data, keys, colors }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const yAxisRef = useRef<SVGSVGElement | null>(null);
  const xAxisRef = useRef<SVGSVGElement | null>(null);

  const xScale = useXScale(
    data.map((item) => item.year),
    width
  );

  const stackGenerator = d3
    .stack<stackedData>()
    .keys(keys)
    .order(stackOrderAscending);
  const layers = stackGenerator(data);
  const extent = [
    0,
    d3.max(layers, (layer) => d3.max(layer, (sequence) => sequence[1])),
  ];

  const yScale = useYScale(height, extent as number[]);

  useXAxis(xAxisRef.current!, xScale, yScale);
  useYAxis(yAxisRef.current!, yScale);

  d3.select(svgRef.current)
    .selectAll(".layer")
    .data(layers)
    .join("g")
    .attr("class", "layer")
    .attr("fill", (layer) => colors[layer.key as keyof colorType])
    .selectAll("rect")
    .data((layer) => layer)
    .join("rect")
    .attr("x", (seq) => xScale(seq.data.year)!)
    .attr("width", xScale.bandwidth())
    .attr("y", (seq) => {
      return yScale(seq[1]);
    })
    .attr("height", (seq) => {
      return yScale(seq[0]) - yScale(seq[1]);
    });

  return (
    <div>
      <svg width={width} height={height} overflow="visible">
        <g transform={`translate(${left},${top})`}>
          <g ref={xAxisRef} />
          <g ref={yAxisRef} />
          <g ref={svgRef} />
        </g>
      </svg>
    </div>
  );
};

export default Chacked2;
