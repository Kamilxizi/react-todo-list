import { useState } from "react";
import "./App.css";
import TodoForm from "./Form";
import Todolist from "./List";

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const done = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <TodoForm setTodos={setTodos} />
        <Todolist todos={todos} deleteTodo={deleteTodo} done={done} />
      </div>
    </div>
  );
}

export default App;
