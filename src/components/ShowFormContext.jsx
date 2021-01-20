import { useState, createContext } from 'react'

const ShowFormContext = createContext();

const ShowFormProvider = (props) => {
    const [showForm, setShowForm] = useState(false);
    return (
        <ShowFormContext.Provider value={[showForm, setShowForm]}>
            {props.children}
        </ShowFormContext.Provider>
    );
}

export { ShowFormContext, ShowFormProvider };
