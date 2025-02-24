import Button from "./Button";

export default function Todo({ id, taskTitle }) {
  function handleEdit() {
    return;
  }

  function handleMarkCompleted() {
    return;
  }

  function handleDelete() {
    return;
  }

  return (
    <div className="flex py-4 my-2">
      <h3 className="text-2xl font-semibold">{taskTitle}</h3>
      <Button buttonLabel="Edit" onClick={handleEdit} />
      <Button buttonLabel="Mark completed" onClick={handleMarkCompleted} />
      <Button buttonLabel="Delete" onClick={handleDelete} />
    </div>
  );
}
