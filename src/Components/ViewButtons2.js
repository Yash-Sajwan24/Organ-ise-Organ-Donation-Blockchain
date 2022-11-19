import { Link } from "react-router-dom";

const ViewButtons2 = (props) => {
    
    return(
        <div><Link to='/database/view-donors'>
            <button type="button" className="btn btn-secondary">{props.title}</button>
        </Link>
        </div>
    )
}
export default ViewButtons2;