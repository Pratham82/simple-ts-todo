import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import "./styles/Todo.css";

const initialtodos: Array<Todo> = [
  { text: "Complete ts tutorial", complete: false },
  { text: "Complete React tutorials", complete: false },
];

console.log(initialtodos.map((v) => v.complete));
const App: React.FC = () => {
  // State management with hooks
  const [todos, setTodos] = useState(initialtodos);

  // Change todos
  const toggleTodo: toggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) =>
      todo === selectedTodo ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() && setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div className="container">
      <div className="innerContainer">
        <h2 className="title">
          {" "}
          <i className="devicon-typescript-plain colored"></i> Todo App
        </h2>
        <AddTodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
};

export default App;
