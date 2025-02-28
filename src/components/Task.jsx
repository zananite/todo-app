import { useAtom } from "jotai";
import { EditButton } from "./Buttons";
import { completedTasksAtom, taskAtom } from "../store/atoms/taskAtom";
import { useState } from "react";
import ButtonWrapper from "./Buttons";

export default function Task({ id, title }) {
  const [tasks, setTasks] = useAtom(taskAtom);
  const [completedTasks, setCompletedTasks] = useAtom(completedTasksAtom);
  const [editClicked, setEditClicked] = useState(false);
  const [editTaskField, setEditTaskField] = useState(title);

  function handleEditTaskButton() {
    setEditClicked((prevState) => !prevState);
  }

  // completes the task and removes it from screen
  function handleCompletedTask() {
    // first updating the completed tasks array
    const oldTasks = [...tasks];
    const completedTask = oldTasks.find((task) => task.id === id);
    setCompletedTasks([...completedTasks, completedTask]);

    // for deleting/removing from the rendered tasks or original tasks
    handleDeleteTask();
  }

  function handleDeleteTask() {
    const oldTasks = [...tasks];
    const newTasks = oldTasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  // to edit an already added task
  function handleEditTaskField(e) {
    setEditTaskField(e.target.value);

    const oldTasks = [...tasks];
    const editedTask = oldTasks.map((task) => {
      if (task.id === id) {
        task.title = editTaskField;
        return task;
      } else {
        return task;
      }
    });

    setTasks(editedTask);
  }

  return (
    // contains a single rendered task
    // with input field or the task name and save, completed, delete button
    <div className="flex py-4 my-2">
      {editClicked ? (
        <input
          placeholder="edit task"
          onChange={handleEditTaskField}
          value={editTaskField} // two way binding of values
          className="font-semibold border border-gray-400 rounded-sm py-2 px-2 mr-10 align-middle outline-none focus:border-red-500"
        ></input>
      ) : (
        <h3 className="text-2xl mr-4 font-semibold">{title}</h3>
      )}

      <EditButton onClick={handleEditTaskButton} editClicked={editClicked} />

      <ButtonWrapper
        buttonName="Mark completed"
        onClick={handleCompletedTask}
      />
      <ButtonWrapper buttonName="Delete" onClick={handleDeleteTask} />
    </div>
  );
}
