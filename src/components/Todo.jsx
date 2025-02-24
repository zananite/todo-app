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
    <div>
      <h3>{taskTitle}</h3>
      <Button buttonLabel="Edit" onClick={handleEdit} />
      <Button buttonLabel="Mark completed" onClick={handleMarkCompleted} />
      <Button buttonLabel="Delete" onClick={handleDelete} />
    </div>
  );
}
