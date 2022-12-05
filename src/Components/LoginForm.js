import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className="background">
        <div className="center">
            <div className="row">
                <div className="col">
                    <label htmlFor="First name">First Name</label>
                    <input type="text" id="First name" className="form-control" aria-label="First name" />
                </div>
                <div className='col'>
                    <label htmlFor="Last name">Last Name</label>
                    <input id="Last name" type="text" className="form-control" aria-label="Last name" />
                </div>

            
                <label htmlFor="blood group">Blood Group</label>
                <select id="blood group" className="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">O+ve</option>
                    <option value="2">B+ve</option>
                    <option value="3">AB+ve</option>
                    <option value="4">A+ve</option>
                    <option value="5">O-ve</option>
                </select>
                <div className="col">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" className='agee' id="age" name="quantity" min="1" max="99" maxLength = "2" />
                </div>
                <div></div>
                <button type="button" className="btn btn-dark submitbutton">Submit</button>
            </div>
            
            </div>
          

        </div>
    )

}

export default LoginForm;