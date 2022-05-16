import { Column } from "react-table";

export const TableColumns: Column[] = [
  {
    Header: "postId",
    accessor: "postId",
  },
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: "email",
    accessor: "email",
  },
  {
    Header: "body",
    accessor: "body",
  },
];
export const PokeTableColumns: Column[] = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Url",
    accessor: "url",
  },
];

export const ChartTableColumns: Column[] = [
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Value",
    accessor: "value",
  },
];
