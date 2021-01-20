import React, { useState, createContext } from 'react';

// create context, this will be used in any component which is child to TaskProvider
export const TaskContext = createContext();

// wrap the components that needs the state of tasks with this TaskProvider component
export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([]);
    return (
        <TaskContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </TaskContext.Provider>
    );
}