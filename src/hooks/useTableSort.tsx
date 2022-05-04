import React, { useEffect, useState } from "react";

export const useTableSort = <T,>(result: T[], data: T[]): T[] => {
  const [tableData, setTableData] = useState<T[]>(data);

  useEffect(() => {
    if (data.length) {
      setTableData(data);
    }
  }, [data]);

  useEffect(() => {
    if (result.length) {
      setTableData(result);
    }
  }, [result]);

  return tableData;
};
