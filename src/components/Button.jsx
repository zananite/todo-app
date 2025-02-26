export default function Button({ buttonLabel, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-black p-2 rounded-md font-semibold bg-desert-sand hover:bg-eggshell align-middle"
    >
      {buttonLabel}
    </button>
  );
}
