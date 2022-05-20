import { axisBottom } from "d3-axis";
import { select } from "d3-selection";
import { useMemo } from "react";

export const useXAxis = (
  ref: SVGSVGElement,
  xScale: d3.ScaleBand<string>,
  yScale: d3.ScaleLinear<number, number, never>
) =>
  useMemo(() => {
    return select(ref)
      .attr("transform", `translate(0, ${yScale(0)})`)
      .call(axisBottom(xScale));
  }, [yScale, xScale]);
