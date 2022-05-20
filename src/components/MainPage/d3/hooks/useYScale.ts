import { scaleLinear } from "d3";
import { useMemo } from "react";

export const useYScale = (height: number, domain: number[]) =>
  useMemo(() => {
    return scaleLinear().domain(domain).range([height, 0]);
  }, [height, domain]);
