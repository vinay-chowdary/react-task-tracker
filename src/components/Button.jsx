import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { TaskContext } from './TaskContext';


function Button({ color, text, onClick }) {


    const [tasks, setTasks] = useContext(TaskContext);
    const nextId = tasks.length + 1;
    const [newTask, setNewTask] = useState({
        id: nextId,
        text: ""
    })


    const handleClick = () => {
        setTasks((prevTasks) => [...prevTasks, newTask])
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setNewTask({
                id: nextId,
                text: ""
            })
        }}>
            <input type="text" name="text" value={newTask.text} onChange={handleChange} />
            <button className="btn" style={{
                backgroundColor: { color },
            }}
                onClick={handleClick}
            >{text}</button>
        </form>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Add'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;