import React, { useState } from "react";
import "./style.css";

const TodoForm = ({ setTodos }) => {
  const [todo, setTodo] = useState("");
  //
  const handleSubmit = () => {
    const newTodo = {
      title: todo,
      id: Date.now(),
      isDone: false,
    };
    //
    if (!todo.trim()) {
      return alert("Заполните поле");
    }

    setTodos((prev) => [...prev, newTodo]);
    setTodo("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="todo"
        className="todoInp"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={handleSubmit} className="btn">
        Add
      </button>
    </>
  );
};

export default TodoForm;
