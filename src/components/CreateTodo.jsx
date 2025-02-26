import Button from "./Button";

export default function CreateTodo({ onChange, onClick, ref }) {
  return (
    <div className="mt-20 text-center">
      <input
        type="text"
        placeholder="Enter a task ..."
        onChange={onChange}
        ref={ref}
        className="border border-gray-400 rounded-sm py-2 px-2 mr-10 align-middle outline-none focus:border-purple-500"
      />
      <Button buttonLabel="Add Task" onClick={onClick} />
    </div>
  );
}
