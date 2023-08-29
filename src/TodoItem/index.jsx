import React from "react";
import "./style.css";

const TodoItem = ({ title, id, deleteTodo, done, isDone }) => {
  return (
    <div className="todoItem">
      <p className={isDone ? "done" : ""}>{title}</p>
      <div className="todoWrapper">
        <button className="EditBtn">Edit</button>
        <button className="doneBtn" onClick={() => done(id)} disabled={isDone}>
          Done
        </button>
        <button className="delBtn" onClick={() => deleteTodo(id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
