import { useEffect, useState } from "react";
import * as d3 from "d3";
import { DataType } from "../types/types";

export function useFetchData() {
  const [data, setData] = useState<DataType[]>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/data/moreData.json");
      const result = await response.json();
      setData(result.data);
    };
    getData();
  }, []);

  return data || [];
}
