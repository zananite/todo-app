import { useAtomValue } from "jotai";
import { taskAtom } from "../store/atoms/taskAtom";
import Task from "./Task";

export default function RenderTasks() {
  const tasks = useAtomValue(taskAtom);

  return (
    <div className="border-black border-l border-r mx-20 my-10">
      {tasks.map((task) => (
        <Task key={task.id} id={task.id} title={task.title} />
      ))}
    </div>
  );
}
