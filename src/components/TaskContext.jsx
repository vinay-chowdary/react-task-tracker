import React, { useState, createContext } from 'react';


export const TaskContext = createContext();

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([{ id: 1, text: "hey idiot 1" }, { id: 2, text: "hey idiot 2" }]);
    return (
        <TaskContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </TaskContext.Provider>
    );
}