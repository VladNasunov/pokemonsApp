import { FC } from "react";
import { Row, TableBodyPropGetter, TableBodyProps } from "react-table";
import { JsonResponse } from "../../../models/tableTypes";

type TBodyProps<T> = {
  bodyProps: (
    propGetter?: TableBodyPropGetter<{}> | undefined
  ) => TableBodyProps;
  rows: Row[];
  prepareRow: (row: Row) => void;
};

const TableBody = <T,>({
  bodyProps,
  rows,
  prepareRow,
}: TBodyProps<T>): JSX.Element => {
  return (
    <tbody {...bodyProps()}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => (
              <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
