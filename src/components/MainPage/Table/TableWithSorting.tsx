import { FC } from "react";
import { funcType } from "../../../models/tableTypes";
import { Column } from "react-table";
import { useWebWorker } from "../../../hooks/useWebWorker";
import { sortFunction } from "../../../utils/utils";
import Table from "./Table";
import { useTableSort } from "../../../hooks/useTableSort";

type TableWithSortingProps<T> = {
  data: T[];
  columns: Column[]
  isLoading?: boolean;
};

const TableWithSorting = <T,>({
  data,
  columns,
  isLoading
}: TableWithSortingProps<T>): JSX.Element => {
  const { result = [], run } = useWebWorker<T>(sortFunction);
  const tableData = useTableSort<T>(result, data);

  return (
    <Table<T>
      data={tableData}
      columns={columns}
      sort={run}
      isLoading={isLoading}
    />
  );
};

export default TableWithSorting;
