import MainHeading from "./components/MainHeading";
import CreateTodo from "./components/CreateTodo";
import DeleteModal from "./components/DeleteModal";
import RenderTasks from "./components/RenderTasks";

function App() {
  return (
    <>
      <DeleteModal />

      <div className="py-10">
        <MainHeading />

        <CreateTodo />

        <RenderTasks />
      </div>
    </>
  );
}

export default App;
