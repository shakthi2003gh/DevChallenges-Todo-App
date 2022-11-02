import TodoNavigation from "./components/taskstatusNav";
import TaskInputSection from "./components/taskAddArea";
import TaskList from "./components/Tasklist";
import Todo from "./context/todoContext";

function App() {
  return (
    <>
      <h1>#todo</h1>

      <div className="todo">
        <Todo>
          <TodoNavigation />
          <TaskInputSection />
          <TaskList />
        </Todo>
      </div>
    </>
  );
}

export default App;
