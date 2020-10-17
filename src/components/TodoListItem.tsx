import React from "react";
import "../styles/Todo.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: toggleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => (
  <li>
    {" "}
    <label
      htmlFor={todo.text}
      className={todo.complete ? "completed base" : "base"}
    >
      <input
        type="checkbox"
        className="base"
        checked={todo.complete}
        onChange={() => toggleTodo(todo)}
      />
      {todo.text}
    </label>{" "}
  </li>
);

export default TodoListItem;
