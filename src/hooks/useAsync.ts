import { useCallback, useState } from "react";

export const useAsync = (asyncFunction: Function) => {
  const [result, setResult] = useState();

  const execute = useCallback(
    async (...params) => {
        const response = await asyncFunction(...params);
        setResult(response);
    },
    [asyncFunction]
  );

  return [ result, execute ];
};
