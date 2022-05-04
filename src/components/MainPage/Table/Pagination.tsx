import { FC } from "react";
import { Row } from "react-table";
import { JsonResponse } from "../../../models/tableTypes";

type PaginationProps = {
  pageCount: number;
  pageIndex: number;
  pageOptions: number[];
  previousPage: () => void;
  canPreviousPage: boolean;
  nextPage: () => void;
  canNextPage: boolean;
  page: Row[];
  setPageSize: (pageSize: number) => void;
  pageSize: number;
  gotoPage: (updater: ((pageIndex: number) => number) | number) => void;
};

const Pagination: FC<PaginationProps> = ({
  gotoPage,
  pageCount,
  pageIndex,
  pageOptions,
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  page,
  setPageSize,
  pageSize,
}) => {
  return (
    <div className="pagination">
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {"<<"}
      </button>{" "}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {"<"}
      </button>{" "}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {">"}
      </button>{" "}
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {">>"}
      </button>{" "}
      <span>
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{" "}
      </span>
      <span>
        | Go to page:{" "}
        <input
          type="select"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: "100px" }}
        />
      </span>{" "}
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
