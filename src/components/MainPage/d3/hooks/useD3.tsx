import { useEffect } from "react";
import * as d3 from "d3";
import { FC } from "react";
import { DataType } from "../types/types";

type BasicLineChartProps = {
  width: number;
  height: number;
  left: number;
  right: number;
  bottom: number;
  top: number;
  fill: string;
};
const props: BasicLineChartProps = {
  width: 800,
  height: 400,
  left: 50,
  right: 50,
  bottom: 50,
  top: 10,
  fill: "red",
};
type d3Data = d3.DSVParsedArray<{
  date: Date | null;
  value: number;
}>;
const createXDomain = (data: d3Data, width: number) => {
  return d3
    .scaleTime()
    .domain(
      d3.extent(data, (d) => {
        return d.date;
      }) as [Date, Date]
    )
    .range([0, width]);
};

const createYDomain = (data: d3Data, height: number) => {
  return d3.scaleLinear()
    .domain([
      d3.min(data, (d) => {
        return Math.min(...data.map((dt) => dt.value));
      }),
      d3.max(data, (d) => {
        return Math.max(...data.map((dt) => dt.value));
      }),
    ] as number[])
    .range([height, 0]);
};

const useD3 = () => {
  useEffect(() => {
    renderChart();
  }, []);
  const renderChart = () => {
    const width: number = props.width - props.left - props.right;
    const height: number = props.height - props.top - props.bottom;

    d3.dsv(",", "/data/line.json", (d) => {
      const res = d as unknown as DataType;
      const date = d3.timeParse("%Y-%m-%d")(res.date);
      return {
        date,
        value: res.value,
      };
    }).then((data) => {
      let svg = d3
        .select("#basicLineChart")
        .append("svg")
        .attr("width", width + props.left + props.right)
        .attr("height", height + props.top + props.bottom)
        .append("g")
        .attr("transform", `translate(${props.left},${props.top})`);

      const x = createXDomain(data, width);

      svg
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));

      const y = createYDomain(data, height);

      svg.append("g").call(d3.axisLeft(y));

      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "gold")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          // @ts-ignore
          d3
            .line()
            .x((d) => {
              return x((d as unknown as { date: number }).date);
            })
            .y((d) => {
              return y((d as unknown as DataType).value);
            })
        );
      return svg;
      //   .attr(
      //     //Area
      //     "d",
      //     // @ts-ignore
      //     d3
      //       .area()
      //       .curve(d3.curveLinear)
      //       .x((d) => {
      //         return x((d as unknown as { date: number }).date);
      //       })
      //       .y0(y(0))
      //       .y1((d) => {
      //         return y((d as unknown as Types.Data).value);
      //       })
      //   );
    });
  };
  return renderChart;
};

export default useD3;
