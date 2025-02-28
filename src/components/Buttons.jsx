// this button wrapper is used for all buttons which are common in functionality and which receives common props
export default function ButtonWrapper({ buttonName, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-black p-2 rounded-md font-semibold bg-desert-sand hover:bg-eggshell align-middle"
    >
      {buttonName}
    </button>
  );
}

export function EditButton({ editClicked, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-black p-2 rounded-md font-semibold bg-desert-sand hover:bg-eggshell align-middle"
    >
      {editClicked ? "Save" : "Edit"}
    </button>
  );
}
