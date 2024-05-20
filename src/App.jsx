import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState(initial);

  const newTodo = { ...todo, id: crypto.randomUUID, isDone: false };
  setTodos([newTodo, ...todos]);

  return (
    <div>
      <h1>투두리스트 타임어택</h1>
      <TodoForm />
      <TodoList /> <TodoList />{" "}
    </div>
  );
};

export default App;
