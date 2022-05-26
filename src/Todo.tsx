import { ChangeEvent, FormEvent, useState } from "react";
import "./Todo.css";

interface ITodo {
  id: number;
  summary: string;
}

function Todo() {
  const [todo, setTodo] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  function onSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTodo((prev) => [...prev, { id: prev.length, summary: newTodo }]);
    setNewTodo("");
  }

  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }
  return (
    <div className="centerMockup">
      <h1>오늘 할일</h1>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="id">💭</label>
        <input
          id="id"
          placeholder="할일을 입력하고 엔터를 누르세요."
          className="todoInput"
          value={newTodo}
          onChange={onChangeInput}
        />
      </form>
      <ul className="listUl">
        {todo.map((todo: ITodo) => (
          <li key={todo.id} className="list">
            <input type="checkbox" />
            {todo.id}번 {todo.summary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
