import "./app.css";

import React, { useState, ChangeEvent } from "react";

function App() {
  const [dan, setDan] = useState<number[] | any>([2, 3, 4, 5, 6, 7, 8, 9]);
  const [num, setNum] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  function onChange(event: ChangeEvent<HTMLSelectElement>) {
    setDan(event.target.value);
  }

  const newDan = [...num];
  newDan.shift();

  return (
    <div>
      <h1>{dan[0]}단</h1>

      <select onChange={onChange}>
        {newDan.map((i: any) => (
          <option value={newDan[i]}>{newDan[i]}</option>
        ))}
      </select>

      <div>
        <Component dan={dan} num={num} />
      </div>
    </div>
  );
}

interface Props {
  dan: number[];
  num: number[];
}

function Component({ dan, num }: Props) {
  return (
    <div>
      {num.map((i, index) => {
        return (
          <div key={index}>
            <span>{dan[0]} </span>
            <span>{num[i]} </span>
            <span>{dan[0] * num[i]}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
