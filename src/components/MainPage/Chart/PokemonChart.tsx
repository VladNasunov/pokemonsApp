import React, { FC, useRef } from "react";
import * as d3 from "d3";

const PokemonChart: FC = () => {
  const ref = useRef<SVGSVGElement | null>(null);
//   const width = 200;
//   const scaleFactor = 10;
//   const barHeight = 20;

//   const dataArr = [10, 50, 20, 100];
//   const graph = d3
//     .select(ref)
//     .attr("width", width)
//     .attr("height", barHeight * dataArr.length);

//   const bar = graph
//     .selectAll("g")
//     .data(dataArr)
//     .enter()
//     .append("g")
//     .attr("transform", function (d, i) {
//       return "translate(0," + i * barHeight + ")";
//     });

//   bar
//     .append("rect")
//     .attr("width", function (d) {
//       return d * scaleFactor;
//     })
//     .attr("height", barHeight - 1);

//   bar
//     .append("text")
//     .attr("x", function (d) {
//       return d * scaleFactor;
//     })
//     .attr("y", barHeight / 2)
//     .attr("dy", ".35em")
//     .text(function (d) {
//       return d;
//     });

  return (
    <svg
      className="container"
      ref={(ref: SVGSVGElement) => ref}
      width="100"
      height="100"
    ></svg>
  );
};
export default PokemonChart;
