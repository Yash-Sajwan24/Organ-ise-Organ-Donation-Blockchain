import { Link } from "react-router-dom";

const ViewButtons = (props) => {

    return(
        <div><Link to='/database/view-patients'>
            <button type="button" className="btn btn-secondary">{props.title}</button>
        </Link>
        </div>
    )
}
export default ViewButtons;