import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className="background">
        <div className="center">
            <div className="row">
                <div className="col">
                    <label for="First name">First Name</label>
                    <input type="text" id="First name" className="form-control" aria-label="First name" />
                </div>
                <div className='col'>
                    <label for="Last name">Last Name</label>
                    <input id="Last name" type="text" className="form-control" aria-label="Last name" />
                </div>

            
                <label for="blood group">Blood Group</label>
                <select id="blood group" className="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">O+ve</option>
                    <option value="2">B+ve</option>
                    <option value="3">AB+ve</option>
                    <option value="4">A+ve</option>
                    <option value="5">O-ve</option>
                </select>
                <div className="col">
                <label for="age" className="form-label">Age</label>
                <input type="number" className='agee' id="age" name="quantity" min="1" max="99" maxlength = "2" />
                </div>
                <div></div>
                <button type="button" class="btn btn-dark">Submit</button>
            </div>
            
            </div>
          

        </div>
    )

}

export default LoginForm;