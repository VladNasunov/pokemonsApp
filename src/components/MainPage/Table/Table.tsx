import { useEffect } from "react";
import { useTable, useSortBy, usePagination, SortingRule } from "react-table";
import { Column } from "react-table";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Pagination from "./Pagination";
import { TableStyles } from "./styles";
import { Spin } from "antd";

type TableProps<T> = {
  data: T[];
  columns: Column[];
  sort?: (sortBy: SortingRule<T>, data: T[]) => void;
  isLoading?: boolean;
};

const Table = <T,>({
  data,
  columns,
  sort,
  isLoading,
}: TableProps<T>): JSX.Element => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    gotoPage,
    canNextPage,
    pageOptions,
    pageCount,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, sortBy },
  } = useTable(
    {
      columns,
      data,
      manualSortBy: true,
    },
    useSortBy,
    usePagination
  );

  useEffect(() => {
    sort && sort(sortBy[0], data);
  }, [sortBy]);

  return (
    <div>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <TableStyles>
            <table {...getTableProps()}>
              <TableHeader headerGroups={headerGroups} />
              <TableBody<T>
                bodyProps={getTableBodyProps}
                rows={page}
                prepareRow={prepareRow}
              />
            </table>
          </TableStyles>
          <Pagination
            gotoPage={gotoPage}
            pageCount={pageCount}
            pageIndex={pageIndex}
            pageOptions={pageOptions}
            previousPage={previousPage}
            canPreviousPage={canPreviousPage}
            nextPage={nextPage}
            canNextPage={canNextPage}
            page={page}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
        </>
      )}
    </div>
  );
};

export default Table;
