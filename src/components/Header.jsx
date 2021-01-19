import PropTypes from 'prop-types'
import Button from './Button';

function handleClick() {
    console.log("hey");
}
const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={handleClick} />
        </header>
    )
}


//default props --> incase no props were passed
Header.defaultProps = {
    title: "Task Tracker"
}


//set data types for props... isRequired is optional
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
