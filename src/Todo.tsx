import { ChangeEvent, FormEvent, useState } from "react";
import "./Todo.css";

interface ITodo {
    id: number;
    summary: string;
}


function Todo() {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [newTodos, setNewTodos] = useState<string>("");

    function onSubmitForm(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault();
        setTodos(prev => [...prev, {id: prev.length, summary: newTodos}])
        setNewTodos("");
    }

    function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
        setNewTodos(Object(event.target.value));
    }
    return (
        <div className="centerMockup">
            <h1>오늘 할일</h1>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="id">💭</label>
                <input id="id" placeholder="할일을 입력하고 엔터를 누르세요." className="todoInput" value={newTodos} onChange={onChangeInput} />
            </form>
            <ul className="listUl">
                {todos.map((todo: ITodo) =>
                    <li key={todo.id} className="list"><input type="checkbox"/>{todo.summary}</li>
                )}
            </ul>
        </div>
    )
}

export default Todo;