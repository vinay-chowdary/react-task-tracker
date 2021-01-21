import { useContext } from 'react';
import { TaskContext } from "../components/TaskContext";
import Task from './Task';

const Tasks = () => {
    const [tasks,] = useContext(TaskContext);
    return (

        // <></> this is called react fragment
        <>
            {tasks.length > 0 ? tasks.map((task, index) => (< Task key={index} task={task} />)) : <h4 className="no-task">** no tasks to show, Click on <i>Add </i> button to add new Task</h4>}
        </>
    )
}

export default Tasks
