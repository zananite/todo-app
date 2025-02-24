export default function Button({ buttonLabel, onClick }) {
  return <button onClick={onClick}>{buttonLabel}</button>;
}
