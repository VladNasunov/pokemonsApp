import { axisBottom } from "d3-axis";
import { select } from "d3-selection";
import { MutableRefObject, RefObject, useEffect, useState } from "react";

export const useXAxis = (
  ref: RefObject<SVGSVGElement> | null,
  xScale: d3.ScaleBand<string> | null
) => {
  // useEffect(() => {
  //   select(ref).call(axisBottom(xScale!));
  // },[]);
};
