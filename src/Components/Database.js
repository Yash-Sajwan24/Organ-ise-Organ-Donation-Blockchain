import { useParams } from "react-router-dom";
import './Database.css';

import axios from "axios"
import { useState } from "react";

const Database = (props) => {
    const params = useParams();

    console.log(params.databaseId);

    const [hospitals, setHospitals] = useState([])


    const fetchData = async () => {
        try {
            const {data} = await axios.get("https://cors-anywhere.herokuapp.com/https://www.communitybenefitinsight.org/api/get_hospitals.php?state=NC")
            console.log({data});
            setHospitals(data)
        } catch (error) {
            console.log({error});
        }
    }

    return(
        <div>
            <h1>{props.title}</h1>
            <p>{params.databaseId.toUpperCase()}</p>
            <div class="container mt-5">

          <div class="row d-flex justify-content-center ">

            <div class="col-md-6">

                <div class="card">
                  
                  <div class="input-box">
                    <input type="text" class="form-control"/>
                    <i class="fa fa-search"></i> 
                    <button onClick={fetchData}>Fetch</button>                   
                  </div>


                  <div class="list border-bottom">

                    <i class="fa fa-fire"></i>
                    <div class="d-flex flex-column ml-3">
                      <span>Client communication policy</span> 
                      <small>{hospitals[0].hospital_id}</small>
                    </div>                   
                  </div>


                  <div class="list border-bottom">

                    <i class="fa fa-yelp"></i>
                    <div class="d-flex flex-column ml-3">
                      <span>Major activity done</span> 
                      <small>{hospitals[1].hospital_id}</small>
                    </div>                   
                  </div>




                  <div class="list border-bottom">

                    <i class="fa fa-fire"></i>
                    <div class="d-flex flex-column ml-3">
                      <span>Calling to USA Clients</span> 
                      <small>{hospitals[2].hospital_id}</small>
                    </div>                   
                  </div>




                  <div class="list">

                    <i class="fa fa-weibo"></i>
                    <div class="d-flex flex-column ml-3">
                      <span>Client communication policy</span> 
                      <small>{hospitals[3].hospital_id}</small>
                    </div>                   
                  </div>

                </div>
              
            </div>
            
          </div>
          
        </div>
        </div>
    )
}

export default Database;