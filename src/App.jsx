import { useState } from "react";
import MainHeading from "./components/MainHeading";
import { v4 as uuidv4 } from "uuid";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";
import { useRef } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  const inputRef = useRef();

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleClick() {
    setTodos([
      {
        id: uuidv4(),
        taskTitle: task,
        completed: false,
      },
      ...todos,
    ]);

    inputRef.current.value = ""; // clears the input box after a task is added
  }

  return (
    <div>
      <MainHeading />

      <CreateTodo
        onChange={handleChange}
        onClick={handleClick}
        ref={inputRef}
      />

      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} taskTitle={todo.taskTitle} />
      ))}
    </div>
  );
}

export default App;
