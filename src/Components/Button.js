import { Link } from "react-router-dom";
const Button = (props) => {
    return(
        <div>
            <Link to="/form">
            <button type="button" className="btn btn-secondary">
            {props.title}
            </button>
            </Link>
            {/* <Link to="/form">{props.title}</Link> */}
        </div>
    )
}

export default Button;