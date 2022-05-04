import { FC } from "react";
import { JsonAPI } from "../../../services/services";
import TableWithSorting from "./TableWithSorting";
import { TableColumns } from "./constants/TableConstants";
import { JsonResponse } from "../../../models/tableTypes";

const TableContainer: FC = () => {
  const { data = [], isLoading } = JsonAPI.useGetCommentsQuery();

  return (
    <>
      <TableWithSorting<JsonResponse>
        columns={TableColumns}
        data={data}
        isLoading={isLoading}
      />
    </>
  );
};
export default TableContainer;
