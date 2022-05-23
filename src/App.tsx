<<<<<<< Updated upstream
import React from "react";

function App() {
  return (
    <div>
      <h1>hello dogvelopers</h1>
=======
import "./app.css";

import React, { useState, ChangeEvent, FormEvent } from "react";

function App() {
  const [text, setText] = useState<string[]>([]);
  const [textValue, setTextValue] = useState<string>("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTextValue("");
    text.push(textValue);
  }

  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    // console.log(event.target.value);
    setTextValue(event.target.value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={textValue} onChange={onChangeInput} />
        <button>입력</button>
      </form>
      <br />
      <Text text={text} />
    </div>
  );
}

interface Props {
  text: string[];
}

function Text({ text }: Props) {
  return (
    <div>
      {text.map((i, index) => {
        return (
          <div>
            <div>
              {index}. {i}
            </div>
          </div>
        );
      })}
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
