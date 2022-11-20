import { useParams } from "react-router-dom";
import './Database.css';
// import ReactSearchBox from "react-search-box";
import SelectSearch from 'react-select-search';
import axios from "axios"
import { useState } from "react";
import 'react-select-search/style.css'

const Database = (props) => {
  const params = useParams();

  console.log(params.databaseId);

  const [hospitals, setHospitals] = useState([])


  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://cors-anywhere.herokuapp.com/https://www.communitybenefitinsight.org/api/get_hospitals.php?state=NC")
      console.log({ data });
      setHospitals(data.map(x => ({
        name: x.name,
        value: x.hospital_id
      })))
    } catch (error) {
      console.log({ error });
    }
  }


  const options = [
    { name: 'Swedish', value: 'sv' },
    { name: 'English', value: 'en' },
    {
      type: 'group',
      name: 'Group name',
      items: [
        { name: 'Spanish', value: 'es' },
      ]
    },
  ];

  /* Simple example */

  return (
    <div className="back">
      <div className="back2">
        <h1>{props.title}</h1>
        <p className="param">{params.databaseId.toUpperCase()}</p>
        

          <div className="row d-flex justify-content-center ">

            <div className="col-md-6">

              <div className="card">

                <div className="input-box">
                  <input type="text" className="form-control" placeholder="Enter patient ID" />
                  <i className="fa fa-search"></i>
                  <button className="fetch" onClick={fetchData}>Fetch</button>
                </div>


                <SelectSearch options={hospitals} value="sv" name="language" placeholder="Choose your nearest hospital" />

                {/* <ReactSearchBox
                   placeholder="Placeholder"
                   value="Doe"
                   data={[]}
                   callback={(record) => console.log(record)}
                  /> */}


                <div className="list border-bottom">

                  <i className="fa fa-fire"></i>
                  <div className="d-flex flex-column ml-3">
                    <span>Client communication policy</span>
                    {/* <small>{hospitals[0].hospital_id}</small> */}
                  </div>
                </div>


                <div className="list border-bottom">

                  <i className="fa fa-yelp"></i>
                  <div className="d-flex flex-column ml-3">
                    <span>Major activity done</span>
                    {/* <small>{hospitals[1].hospital_id}</small> */}
                  </div>
                </div>




                <div className="list border-bottom">

                  <i className="fa fa-fire"></i>
                  <div className="d-flex flex-column ml-3">
                    <span>Calling to USA Clients</span>
                    {/* <small>{hospitals[2].hospital_id}</small> */}
                  </div>
                </div>




                <div className="list">

                  <i className="fa fa-weibo"></i>
                  <div className="d-flex flex-column ml-3">
                    <span>Client communication policy</span>
                    {/* <small>{hospitals[3].hospital_id}</small> */}
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