import React, { useEffect, useState, FC } from "react";
import { Input, Button } from "antd";
// import * as d3 from 'd3'
const Charts: FC = () => {
  return (
    <>
      <div style={{display: 'flex'}}>
        <Input type="text" placeholder="Pokemon 1" />
        <Input type="text" placeholder="Pokemon 2" />
      </div>

      <Button style={{margin: '0px auto'}}>Fight</Button>
    </>
  );
};

export default Charts;
