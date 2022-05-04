import { DataType } from "../types/types";
import { scaleBand } from "d3-scale";
import { useEffect, useState } from "react";

const extractDates = (data: DataType[]) => data.map((item) => item.date);

export const useXScale = (data: DataType[], width: number) => {
  const [storage, setStorage] = useState<d3.ScaleBand<string> | null>(null);
  
  useEffect(() => {
    const scale = scaleBand().domain(extractDates(data)).range([0, width]);
    setStorage(scale)
  },[data, width]);

  return storage
};
