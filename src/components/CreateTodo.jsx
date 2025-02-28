import { useAtom } from "jotai";
import { taskAtom } from "../store/atoms/taskAtom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ButtonWrapper from "./Buttons";
import { useRef } from "react";

export default function CreateTodo() {
  const inputRefTask = useRef();

  const [tasks, setTasks] = useAtom(taskAtom);

  const [newTask, setNewTask] = useState("");

  function onChange(e) {
    setNewTask(e.target.value);
  }

  function handleAddTask() {
    setTasks([
      {
        id: uuidv4(),
        title: newTask,
        completed: false,
      },
      ...tasks,
    ]);

    inputRefTask.current.value = "";
  }

  return (
    <div className="mt-20 text-center">
      <input
        ref={inputRefTask}
        type="text"
        placeholder="Enter a task ..."
        className="border border-gray-400 rounded-sm py-2 px-2 mr-10 align-middle outline-none focus:border-purple-500"
        onChange={onChange}
      />

      <span className="mr-10">
        <ButtonWrapper buttonName="Add Task" onClick={handleAddTask} />
      </span>

      <span>
        <ButtonWrapper buttonName="Show Completed Todos" />
      </span>
    </div>
  );
}
