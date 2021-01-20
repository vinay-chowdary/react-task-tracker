import PropTypes from 'prop-types';

function Button({ color, text }) {

    const handleClick = () => {
    }

    return (
        <button
            className="btn"
            style={{ backgroundColor: color }}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: '#000',
    text: 'Add'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;