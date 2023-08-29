import React from "react";
import "./style.css";
import TodoItem from "../TodoItem";

const list = ({ todos, deleteTodo, done }) => {
  return (
    <div>
      <h2>List: </h2>
      {todos.map(({ title, id, isDone }) => (
        <TodoItem
          title={title}
          id={id}
          key={id}
          deleteTodo={deleteTodo}
          done={done}
          isDone={isDone}
        />
      ))}
    </div>
  );
};

export default list;
