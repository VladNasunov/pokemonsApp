import { max, stack, stackOrderAscending } from "d3";
import { stackedData } from "../Stacked2Container";

const prepareStackedData = (data: any) => {
  const keys: string[] = ["1", "2", "3"];
  const stackGenerator = stack<stackedData>()
    .keys(keys)
    .order(stackOrderAscending);
  const layers = stackGenerator(data);
  const extent = [
    0,
    max(layers, (layer) => max(layer, (sequence) => sequence[1])),
  ];
  return [...layers, ...extent];
};

export const useData = (data: any, type: string) => {
  if (type === "stacked") {
    return prepareStackedData(data);
  }
  return data;
};
