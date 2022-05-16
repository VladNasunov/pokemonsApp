import { FC, useEffect, useRef } from "react";
import { StackedDataType, onClickType, dataValues } from "./types/types";
import * as d3 from "d3";

export type StackedChartProps = {
  data: StackedDataType[];
  stackedDataValues: dataValues[];
  getX: d3.ScaleBand<string>;
  getY: d3.ScaleLinear<number, number, never>;
};

const StackedChart: FC<StackedChartProps> = ({
  data,
  getX,
  getY,
  stackedDataValues,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapperRef = useRef<SVGSVGElement | null>(null);
  const width = 400;
  const height = 300;
  const stackGenerator = d3
    .stack<StackedDataType>()
    .keys(["first", "second", "third"]);

  const layers = stackGenerator(data);
  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .selectAll("rect")
      .data((layer) => layer)
      .join("rect")
      .attr("fill", "blue")
      .attr("x", (seq) => getX(seq.data.date)!)
      .attr("width", getX.bandwidth())
      .attr("y", (seq) => {
        return getY(seq[1]);
      })
      .attr("heigth", (seq) => {
        return getY(seq[0] - seq[1]);
      });
  }, []);
  return (
    <>
      <g ref={svgRef} />
    
      {/* {layers.map((item) => {
        item.map((item1) => {
          console.log(item1[0]);
          return (
            <>
              <g ref={svgRef} />
              <g
                transform={`translate(${getX(item1.date)}, ${getY(item.value)})`}
              >
                <rect
                  width={getX.bandwidth() - 20}
                  height={chartHeight - getY(item.value)}
                  fill="blue"
                  opacity="0.4"
                  transform={`translate(${10})`}
                />
              </g>
            </>
          );
        });
      })} */}
    </>
  );
};

export default StackedChart;
