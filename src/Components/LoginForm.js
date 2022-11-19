import './LoginForm.css'
const LoginForm = () =>{
    return(
        <div>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                </div>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Blood Group</option>
                    <option value="1">O+ve</option>
                    <option value="2">B+ve</option>
                    <option value="3">AB+ve</option>
                    <option value="4">A+ve</option>
                    <option value="5">O-ve</option>
                </select>
                <label for="customRange2" className="form-label">Age</label>
                <input type="range" className="form-range" min="0" max="100" id="customRange2"/>
            </div>
            <button type="button" className="btn btn-dark">Submit</button>

        </div>
    )

}

export default LoginForm;