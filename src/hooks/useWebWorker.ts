import { useState } from "react";
import { SortingRule } from "react-table";
import { funcType, JsonResponse } from "../models/tableTypes";

const workerHandler = (sorter: funcType) => {
  onmessage = (event) => {
    const { sortBy, tableData } = event.data;
    postMessage(sorter(sortBy, tableData));
  };
};

export const useWebWorker = <T>(sorter: funcType) => {
  const [result, setResult] = useState<T[]>([]);

  const run = (sortBy: SortingRule<T>, tableData: T[]) => {
    const worker = new Worker(
      URL.createObjectURL(
        new Blob([`(${workerHandler})(${sorter})`], {
          type: "application/javaSctipt",
        })
      )
    );
    worker.onmessage = (event: MessageEvent<T[]>) => {
      setResult(event.data);
      worker.terminate();
    };

    worker.postMessage({ sortBy, tableData });
  };

  return {
    result,
    run,
  };
};
