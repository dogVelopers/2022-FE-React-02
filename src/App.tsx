import React, { ChangeEvent, useState } from "react";
import Sample from "./Sample";

const danArray = [2, 3, 4, 5, 6, 7, 8, 9];
const numArray: number[] = Array.from({ length: 9 }, (_, i) => i + 1);

function App() {
  const [dan, setDan] = useState<number>(2);

  function onChangeSelect(e: ChangeEvent<HTMLSelectElement>) {
    setDan(Number(e.target.value));
    console.log(e.target.value);
  }

  return (
    <div>
      <h2>{dan} 단</h2>

      <select onChange={onChangeSelect}>
        {danArray.map((eachDan) => (
          <option value={eachDan} key={eachDan}>
            {eachDan}
          </option>
        ))}
      </select>

      <table>
        <tbody>
          {numArray.map((num) => (
            <tr key={num}>
              <td>{dan}</td>
              <td>{num}</td>
              <td>{dan * num}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Sample />
    </div>
  );
}

export default App;
