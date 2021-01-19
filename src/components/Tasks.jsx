import { useContext } from 'react';
import { TaskContext } from "../components/TaskContext";
const Tasks = () => {
    const [tasks, _] = useContext(TaskContext);
    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.id},{task.text}</h3>))}
        </>
    )
}

export default Tasks
