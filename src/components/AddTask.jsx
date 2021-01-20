import { FormControlLabel, TextField, makeStyles, Button, Checkbox } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import { useState, useContext } from 'react';
import moment from 'moment';
import { TaskContext } from './TaskContext'
import { v4 as uuidv4 } from 'uuid';


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "2rem",
        '& .MuiTextField-root': {
            margin: "auto",
            marginBottom: "1rem",
            width: "100%",
        },

    },
    button: {
        color: "#fff",
        width: "100%",
    }
}));

const initialValues = {
    text: "",
    date: moment().format().slice(0, 16)
}

const AddTask = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(true);
    const [newTask, setNewTask] = useState(initialValues);
    const [, setTasks] = useContext(TaskContext);

    const handleCheck = (e) => {
        setChecked(prevState => !prevState);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const addTask = { id: uuidv4(), ...newTask, remainder: checked }
        console.log(addTask);
        setTasks((prevState) => (
            [...prevState, addTask]
        ))
        setNewTask(initialValues);
    }
    return (

        <form autoComplete="off" className={classes.root} onSubmit={handleSubmit}>
            <TextField
                name="text"
                spellCheck="false"
                required
                label="Task"
                id="text"
                variant="outlined"
                type="text"
                placeholder="Panel Meeting"
                onChange={handleChange}
                value={newTask.text}
            />
            <TextField
                id="task-due-time"
                label="Due Date &amp; Time"
                type="datetime-local"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                required
                onChange={handleChange}
                value={newTask.date}
                name="date"
            />
            <FormControlLabel
                label="Set Remainder"
                labelPlacement="start"
                control={
                    < Checkbox
                        checked={checked}
                        onChange={handleCheck}
                        name="checked"
                        color="primary"

                    />
                }
            />
            <Button
                type="submit"
                startIcon={<SaveIcon />}
                className={classes.button}
                variant="contained"
                color="primary"
            >
                Save
            </Button>
        </form >
    )
}

export default AddTask
