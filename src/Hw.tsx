import { useState } from "react";
import "./Hw.css";

function Hw() {
    const [state, setState] = useState([0, 1, 2]);

    function increaseState() {
        setState(state.concat(state.length))

    }
    function decreaseState() {
        setState(state.slice(0, state.length - 1))
    }


    return (
        <>
            <div className="wrapper">
                {state.map((num, index) => {
                    return (
                        <div className="arrayBox" key={index}>{num}</div>)
                })}
            </div>
            <button className="increase" onClick={increaseState}>+</button>
            <button className="decrease" onClick={decreaseState}>-</button>
        </>
    )
}

export default Hw;