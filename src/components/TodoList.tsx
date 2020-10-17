import React from "react";
import TodoListItem from "./TodoListItem";
import "../styles/Todo.css";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: toggleTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
  <ul className="listStyle">
    {" "}
    {todos.map((todo) => (
      <TodoListItem todo={todo} toggleTodo={toggleTodo} key={todo.text} />
    ))}
  </ul>
);

export default TodoList;
