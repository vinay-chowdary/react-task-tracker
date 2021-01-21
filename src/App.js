import AddTask from "./components/AddTask";
import Header from "./components/Header";
import { TaskProvider } from "./components/TaskContext";
import Tasks from "./components/Tasks";
import { ShowFormContext } from './components/ShowFormContext'
import { useContext } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import QuickLinks from "./components/QuickLinks";

function App() {
  const [showForm] = useContext(ShowFormContext);
  return (

    <Router>
      <TaskProvider>

        <div className="App container">
          <Header />
          <Route path="/" exact>
            {showForm && <AddTask />}
            <Tasks />
            <Footer />
          </Route>
          <Route path="/quick-links">
            <QuickLinks />
          </Route>
        </div>
      </TaskProvider >
    </Router>
  );
}

export default App;
