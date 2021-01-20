import AddTask from "./components/AddTask";
import Header from "./components/Header";
import { TaskProvider } from "./components/TaskContext";
import Tasks from "./components/Tasks";
import { ShowFormContext } from './components/ShowFormContext'
import { useContext } from 'react'

function App() {
  const [showForm] = useContext(ShowFormContext);
  return (

    <TaskProvider>

      <div className="App container">
        <Header />
        {showForm && <AddTask />}
        <Tasks />
      </div>
    </TaskProvider >
  );
}

export default App;
