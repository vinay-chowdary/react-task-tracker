import PropTypes from 'prop-types';
import { ShowFormContext } from './ShowFormContext'
import { useContext } from 'react'

function Button({ color, text }) {
    const [showForm, setShowForm] = useContext(ShowFormContext);
    const handleClick = () => {
        setShowForm((prevState) => (!prevState))
    }

    return (
        <button
            className="btn"
            style={{ backgroundColor: showForm ? "red" : color }}
            onClick={handleClick}
        >
            {showForm ? "Close" : "Add"}
        </button>
    )
}

Button.defaultProps = {
    color: "green",
    text: "Add"
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;