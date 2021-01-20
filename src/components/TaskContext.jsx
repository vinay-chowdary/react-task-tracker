import React, { useState, createContext } from 'react';

// create context, this will be used in any component which is child to TaskProvider
export const TaskContext = createContext();

// wrap the components that needs the state of tasks with this TaskProvider component
export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([{ id: 1, text: "hey idiot 1", remainder: true, date: "9th feb 2020" }, { id: 2, text: "hey idiot 2", remainder: false }]);
    return (
        <TaskContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </TaskContext.Provider>
    );
}