import { ChangeEvent, FormEvent, useState } from "react";

function App() {
  // onSubmit > preventDefault
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(todo);
    setTodo("");
  }

  // state for input
  const [todo, setTodo] = useState<string>("");

  // onChange
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  // state binding > onChange setState > onSubmit

  return (
    <div>
      <h1>submit과 change</h1>

      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} />
        <button type="submit">확인</button>
      </form>

      <section>
        <article></article>
      </section>
    </div>
  );
}

export default App;
