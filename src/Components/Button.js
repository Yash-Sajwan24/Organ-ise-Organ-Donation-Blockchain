import { Link } from "react-router-dom";
const Button = (props) => {
    return(
        <div className="back">
            <div className="back2">
            <Link to="/form">
            <button type="button" className="btn btn-secondary">
            {props.title}
            </button>
            </Link>
            {/* <Link to="/form">{props.title}</Link> */}
        </div>
        </div>
    )
}

export default Button;