import React, { useState } from "react";
import PokeTableContainer from "./PokeTableContainer";
import TableContainer from "./TableContainer";

const SwitchTables = () => {
  const [on, setOn] = useState<boolean>(false);
  return (
    <>
      <input type="checkbox" onChange={(e) => setOn(e.target.checked)} />
      {on ? <TableContainer /> : <PokeTableContainer />}
    </>
  );
};

export default SwitchTables;
// switch ? <PokeTableContainer/> : <TableContainer/>
