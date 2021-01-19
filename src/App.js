import Header from "./components/Header";
import { TaskProvider } from "./components/TaskContext";
import Tasks from "./components/Tasks";

function App() {
  return (

    <TaskProvider>
      <div className="App container">
        <Header title="Task Tracker" />
        <Tasks />
      </div>
    </TaskProvider>
  );
}

export default App;
