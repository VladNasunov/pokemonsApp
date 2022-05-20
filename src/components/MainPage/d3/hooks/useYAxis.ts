import { axisLeft } from "d3-axis";
import { select } from "d3-selection";
import { useMemo } from "react";

export const useYAxis = (
  ref: SVGSVGElement,
  yScale: d3.ScaleLinear<number, number, never>
) =>
  useMemo(() => {
   return select(ref).call(axisLeft(yScale));
  }, [yScale]);
