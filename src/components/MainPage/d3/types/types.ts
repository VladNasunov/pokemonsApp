export type DataType = {
  date: string;
  value: number;
};
export type StackedDataType = {
  date: string;
  first: number;
  second: number;
  third: number;
};
export type onClickType = (a: boolean) => void;

export type dataValues = Omit<StackedDataType, "date">;
