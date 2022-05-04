import { FC } from "react";
import { HeaderGroup, UseSortByColumnProps } from "react-table";
import { JsonResponse } from "../../../models/tableTypes";

type TableHeaderProps<T> = {
  headerGroups: HeaderGroup[];
};

const TableHeader = <T,> ({ headerGroups }: TableHeaderProps<T>): JSX.Element => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render("Header")}
              <span>
                {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
              </span>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
