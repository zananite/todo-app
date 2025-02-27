import Button from "./Button";

export default function Todo() {
  return (
    <div className="flex py-4 my-2">
      <h3 className="text-2xl font-semibold"></h3>
      <Button buttonLabel="Edit" />
      <Button buttonLabel="Mark completed" x />
      <Button buttonLabel="Delete" />
    </div>
  );
}
