import { Link } from "react-router-dom";

const ViewButtons = (props) => {

    return(
        <div className="back">
            <div className="back2">
            <Link to='/database/view-patients'>
            <button type="button" className="btn btn-secondary">{props.title}</button>
        </Link>
        </div>
        </div>
    )
}
export default ViewButtons;