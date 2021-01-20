import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { TaskContext } from './TaskContext';
import { useContext } from 'react';

const Task = ({ task }) => {

    // using Context Api to track state of list of tasks
    const [, setTasks] = useContext(TaskContext);


    // invoke the function when delete icon is clicked to delete the task and update the state
    const deleteTask = (id) => {
        setTasks((prevTasks) => (
            prevTasks.filter((task) => task.id !== id)
        ))
    }

    // toggle remainder when double clicked on task div
    const toggleRemainder = (id) => {
        setTasks((prevTasks) => (
            prevTasks.map((task) => (
                task.id === id ? { ...task, remainder: !task.remainder } : task
            ))
        ))
    }


    return (
        <div
            className={`task ${task.remainder && "remainder"}`}
            style={{ userSelect: "none" }}      // prevent user to copy text
            onDoubleClick={(e) => {
                toggleRemainder(task.id);
            }}
        >

            <h3>{task.text}
                <IconButton onClick={() => { deleteTask(task.id) }} >
                    <DeleteIcon style={{ color: "#f00" }} />
                </IconButton></h3>
            <p>{task.date}</p>

        </div >
    );
}

export default Task;
