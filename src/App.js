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
          <Route path="/" exact basename={process.env.PUBLIC_URL} render={(props) => (
            <>
              {showForm && <AddTask />}
              <Tasks />
              <Footer />
            </>
          )} />
          <Route path="/quick-links" render={
            (props) => (
              <QuickLinks />
            )
          } />
        </div>
      </TaskProvider >
    </Router>
  );
}

export default App;
