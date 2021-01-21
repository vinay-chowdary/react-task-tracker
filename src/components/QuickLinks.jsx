import { Link } from "react-router-dom"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const QuickLinks = () => {
    return (
        <div className="quick-links-page">
            <div className="quick-links">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vinaychowdary"><LinkedInIcon fontSize="large" /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/vinay-chowdary"><GitHubIcon fontSize="large" /></a>
            </div>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default QuickLinks
