import "./app.css";

import React, { useState, useEffect } from "react";

function App() {
  let [number, setNumber] = useState<number[]>([0, 1, 2]);

  return (
    <div>
      <div className="numBoxContainer">
        {number.map((i) => {
          return (
            <div className="numBox" key={i}>
              {number[i]}
            </div>
          );
        })}
      </div>
      <div className="buttonDiv">
        <button
          onClick={() => {
            const plusNum = [...number];
            let newNumLength = plusNum.length;
            plusNum.push(newNumLength);
            setNumber(plusNum);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            const minusNum = [...number];
            minusNum.pop();
            setNumber(minusNum);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;

// 3. 더하기 버튼을 눌렀을 때 “현재 배열의 길이” 값을 배열의 마지막에 추가
// 4. 빼기 버튼을 눌렀을 때 “가장 오른쪽 마지막" 값을 배열에서 삭제
