import { ChangeEvent, useState } from "react";
import "./Mul.css";

function Mul() {
    const [numState, numSetState] = useState<number>(2); // 2부터 시작

    const dan = [2, 3, 4, 5, 6, 7, 8, 9]; // 2단부터 9단까지
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function selectDan(event: ChangeEvent<HTMLSelectElement>) {
        numSetState(parseInt(event.target.value))
    }

    // 결과 값
    function MulResult() {
        return <>{number.map((num) => {
            return <div>
                {numState} * {num} = {
                    numState * num
                }</div>
        })}</>
    }

    return (
        <div className="wrapper">
            <h1>구구단</h1>
            <span className="selectNum">{numState}단</span>
            <div className="selectWrapper">
                <select onChange={selectDan} className="selectButton">
                    {dan.map((eachDan, index) =>
                        <option key={index} value={eachDan}>{eachDan}</option>
                    )}
                </select>
            </div>
            <div className="resultWrapper">
                <MulResult />
            </div>
        </div>
    )
}

export default Mul;