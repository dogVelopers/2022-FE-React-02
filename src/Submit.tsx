import { ChangeEvent, FormEvent, useState } from "react";
import "./Submit.css";

function Submit() {
    const [textValue, setTextValue] = useState<string>(""); // 바뀔 때마다 리렌더링이 일어난다.

    function onSubmitMyForm(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault();
        console.log(textValue);
        setTextValue("");
    }

    function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
        setTextValue(event.target.value);
    }

    return (
        <div>
            <h1>submit과 change</h1>
            <form onSubmit={onSubmitMyForm}>
                <label htmlFor="id">아이디: </label>
                <input id="id" value={textValue} onChange={onChangeInput} />
                <label>비밀번호: </label>
                <input type="password" />
                <button>확인</button>
                <label htmlFor="check1" className="check1">체크</label>
                <input id="check1" type="checkbox" />
            </form>
        </div>
    )
}

export default Submit;