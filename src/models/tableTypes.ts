import { SortingRule } from "react-table";

export type JsonResponse = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type ColumnsType = {
  Header: string;
  accessor: string;
};
export type sortType = { id: string; desc: boolean };

export type funcType = <T>(
  sortBy: SortingRule<T>,
  tableData: T[]
)=> T[]
