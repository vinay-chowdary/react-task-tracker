import PropTypes from 'prop-types'
import Button from './Button';
import { useLocation } from "react-router-dom";

const Header = ({ title }) => {
    const location = useLocation();
    return (
        <header className="header">
            {location.pathname === "/" ? <h1>{title}</h1> : <h1>My Profile Links</h1>}
            {location.pathname === "/" && <Button />}

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
