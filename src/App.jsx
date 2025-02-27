import MainHeading from "./components/MainHeading";
import CreateTodo from "./components/CreateTodo";
import DeleteModal from "./components/DeleteModal";

function App() {
  return (
    <>
      <DeleteModal />

      <div className="py-10">
        <MainHeading />

        <CreateTodo />

        <div className="border-black border-l border-r mx-20 my-10"></div>
      </div>
    </>
  );
}

export default App;
