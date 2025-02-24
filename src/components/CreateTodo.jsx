import Button from "./Button";

export default function CreateTodo({ onChange, onClick, ref }) {
  return (
    <div>
      <input type="text" placeholder="Add task" onChange={onChange} ref={ref} />
      <Button buttonLabel="Add Task" onClick={onClick} />
    </div>
  );
}
