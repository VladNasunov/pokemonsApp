import React, { useState } from "react";
import Chacked2 from "./StackedChart";

export type stackedData = {
  year: string;
  "🥑": number;
  "🍌": number;
  "🍆": number;
};

export type keyType = string;

export type colorType = {
  "🥑": string;
  "🍌": string;
  "🍆": string;
};

const data = [
  {
    year: "1980",
    "🥑": 10,
    "🍌": 20,
    "🍆": 30,
  },
  {
    year: "1990",
    "🥑": 20,
    "🍌": 40,
    "🍆": 60,
  },
  {
    year: "2000",
    "🥑": 30,
    "🍌": 45,
    "🍆": 80,
  },
  {
    year: "2010",
    "🥑": 40,
    "🍌": 60,
    "🍆": 100,
  },
  {
    year: "2020",
    "🥑": 50,
    "🍌": 80,
    "🍆": 120,
  },
];
const allKeys = ["🥑", "🍌", "🍆"];

const colors = {
  "🥑": "green",
  "🍌": "yellow",
  "🍆": "purple",
};

const Stacked2 = () => {
  const [keys, setKeys] = useState<keyType[]>(allKeys);

  return (
    <>
      <div>Stacked Bar chart</div>
      <>Component</>
      <Chacked2 data={data} colors={colors} keys={keys} />
      <div style={{ display: "flex", marginTop: '30px'}}>
        {allKeys.map((key) => (
          <div key={key}>
            <input
            style={{marginLeft: '120px'}}
              id={key}
              type="checkbox"
              checked={keys.includes(key)}
              onChange={(e) =>
                e.target.checked
                  ? setKeys(Array.from(new Set([...keys, key])))
                  : setKeys(keys.filter((_key) => _key !== key))
              }
            />
            <label htmlFor={key}>{key}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stacked2;
