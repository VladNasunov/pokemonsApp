import { scaleBand } from "d3";
import { useMemo } from "react";

export const useXScale = (domain: string[], width: number) =>
  useMemo(() => {
    return scaleBand().domain(domain).range([0, width]).padding(0.25);
  }, [domain, width]);

// const extractDates = (data: DataType[]) => data.map((item) => item.date);

// export const useXScale = (data: DataType[], width: number) => {
//   const [storage, setStorage] = useState<d3.ScaleBand<string> | null>(null);

//   useEffect(() => {
//     const scale = scaleBand().domain(extractDates(data)).range([0, width]);
//     setStorage(scale);
//   }, [data, width]);

//   return storage;
// };
