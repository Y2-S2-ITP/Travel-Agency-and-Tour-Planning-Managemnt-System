import React, { Component } from 'react'
import "../style/admin.css";
import "../style/adminTravelDocApplication.css"
import axios from 'axios';
import Imglogo from "../images/logo.png";
import HouseIcon from '@material-ui/icons/House';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ExploreIcon from '@material-ui/icons/Explore';
import DescriptionIcon from '@material-ui/icons/Description';
import SecurityIcon from '@material-ui/icons/Security';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import TravelDocAddReportView from './TravelDocAddReportView';






export default class AdminTravelDocAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
    TravelDocAdd: []
    };
  }

  componentDidMount() {
    this.retrieveTravelDocAdd();
  }

  retrieveTravelDocAdd() {
    axios.get("http://localhost:8000/TravelDocAdd").then(res => {
      if (res.data.success) {
        this.setState({
            TravelDocAdd: res.data.existingTravelDocAdd
        });

        console.log(this.state.TravelDocAdd)
      }
    })
  }

  onDelete = (id) =>{

   axios.delete(`http://localhost:8000/TravelDocAdd/delete/${id}`).then((res) =>{
     alert("Travel Document Link details Delete Successfully");
     this.retrieveTravelDocAdd();
   })

  }

  render() {
    return (
      <div>
        <div className="display-table">
          <div className="row display-table-row">
            <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
              <div className="logo">
                <a hef="home.html"><img src={Imglogo} alt="merkery_logo" className="hidden-xs hidden-sm" />

                </a>

              </div>
              <h3 style={{ color: "white" }}><b>Admin Panel</b></h3>
              <div className="navi">
                <ul>
                  <li ><a href="#"><HouseIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Accommadation</span></a></li>
                  <li><a href="#"><ConfirmationNumberIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ticket</span></a></li>
                  <li><a href="#"><LocalTaxiIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ground</span></a></li>
                  <li><a href="/adminTourHome"><ExploreIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Tour Package</span></a></li>
                  <li><a href="/admintravelDoc"><DescriptionIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Travel Document</span></a></li>
                  <li><a href="#"><SecurityIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Insurance</span></a></li>
                  <li><a href="#"><EventIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Event</span></a></li>
                  <li><a href="#"><GroupIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;User MAnagement</span></a></li>

                </ul>
              </div>
            </div>
            <div className="container">
            <div>
               <h1>User's Travel Documents</h1>
               <br/>
               <table class="table">
                   <thead>
                       <tr>
                           <th scope="col">#</th>
                           <th scope="col">User Id</th>
                           <th scope="col">User name</th>
                           <th scope="col">Document name</th>
                           <th scope="col">Document path</th>
                           <th scope="col">Country name</th>
                           <th scope="col">Submited date</th>
                           <th scope="col">Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.state.TravelDocAdd.map((TravelDocAdd, index) =>(

                         <tr>
                             <th scope="row">{index+1}</th>
                             <td>{TravelDocAdd.user_ID}</td>
                             <td>{TravelDocAdd.user_name}</td>
                             <td>{TravelDocAdd.Document_name}</td>
                             <td>{TravelDocAdd.Document_Link}</td>
                             <td>{TravelDocAdd.Country_name}</td>
                             <td>{TravelDocAdd.Submit_date}</td>
                             <td>
                             <a className="btn btn-warning" href={`/adminTravelDocAddEdit/${TravelDocAdd._id}`}>
                                     <i className = "fas fa-edit"></i>&nbsp;Edit
                                 </a>
                                 &nbsp;
                                 <a className="btn btn-danger" herf="#" onClick={() =>this.onDelete(TravelDocAdd._id)}>
                                     <i className = "far fa-trash-alt"></i>&nbsp;Delete
                                 </a>

                             </td>

                         </tr>

                       ))}
                   </tbody>

               </table>

               <TravelDocAddReportView/>

          
            </div>
            </div>
          </div>

        </div>



      </div>
    )
  }
}
