import { Link, Route, Switch, useHistory } from "react-router-dom";
import Button from "../Components/Button";
import Database from "../Components/Database";
import LoginForm from "../Components/LoginForm";
import Location from "../Components/Location";
import Navbar from "../Components/Navbar";
import ViewButtons from "../Components/ViewButtons";
import ViewButtons2 from "../Components/ViewButtons2";

const Dashboard = () => {
  const history = useHistory();
  const handleHistory = () =>{
    history.push("/");
  }  
  return (
    <div>
      <Navbar />
      <button onClick={handleHistory} type="button" className="btn btn-dark backk">🔙</button>
      <main>
        <Switch>
          <Route exact path="/">
            <Button title="Register Donor" />
            <Button title="Register Patient" /> 
            {/* <ViewButtons title="View Patients"/>
            <ViewButtons title="View Donors"/> */}
            <Link to="/database/d1"><ViewButtons title="View Patients"/></Link>
          <Link to="/database/d2"><ViewButtons2 title="View Donors"/></Link>
          </Route>
         
          <Route exact path="/location">
            <Location />
          </Route>
          
          <Route exact path="/form">
            <LoginForm />
          </Route>
          <Route exact path="/database/:databaseId">
            {/* <Database title='Patients Database'/>
            <Database title='Donors Database'/>
             */
             <Database/>
             }
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default Dashboard;