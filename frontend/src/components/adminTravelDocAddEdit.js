import React, { Component } from 'react'
import Imglogo from "../images/logo.png";
import HouseIcon from '@material-ui/icons/House';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ExploreIcon from '@material-ui/icons/Explore';
import DescriptionIcon from '@material-ui/icons/Description';
import SecurityIcon from '@material-ui/icons/Security';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import axios from 'axios';

export default class adminTravelDocAddEdit extends Component {


    constructor(props){
        super(props);
        this.state={
        Document_name:"",
        Document_Link:"",
        Country_name:"",
        Submit_date:""
        }
    }
 
    handleInputChange = (e) =>{
        const {name,value} = e.target;
 
        this.setState({
            ...this.state,
            [name]:value
        })
    }
 
    onSubmit = (e) =>{
 
     e.preventDefault();
     
     const id =this.props.match.params.id;
     const {Document_name,Document_Link,Country_name,Submit_date} = this.state;
 
     const data = {
        Document_name:Document_name,
        Document_Link:Document_Link,
        Country_name:Country_name,
        Submit_date:Submit_date
     }
 
     console.log(data)
 
     axios.put(`http://localhost:8000/TravelDocAdd/update/${id}`,data).then((res) =>{
         if(res.data.success){
            alert("Travel document Link Updated successfully")
             this.setState(
                 {
                    Document_name:"",
                    Document_Link:"",
                    Country_name:"",
                    Submit_date:""
                 }
             )
         }
     })
 
    }

   
    componentDidMount(){

       const id =this.props.match.params.id;

       axios.get(`http://localhost:8000/TravelDocAdd/${id}`).then((res) =>{
           if(res.data.success){
               this.setState({
                Document_name:res.data.post.Document_name,
                Document_Link:res.data.post. Document_Link,
                Country_name:res.data.post.Country_name,
                Submit_date:res.data.post.Submit_date

               });

               console.log(this.state.post);
           }
       });

    }

    render() {
        return (
            <div>
            <div className=" display-table">
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
                    <div>
                        <div className="col-md-8 mt-4 mx-auto">
                            <h1 className="h3 mb-3 font-weight-normal">Edit Tarvel Document Application Link</h1>
                            <form className="needs-Validation" noValidation>
                                <div className="form-group" style={{marginBottom:'15px'}}>
                                    <label style={{marginBottom:'15px'}}>Country name</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Country_name"
                                    placeholder="Enter country name"
                                    value={this.state.Country_name}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="form-group" style={{marginBottom:'15px'}}>
                                    <label style={{marginBottom:'15px'}}>Document path</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Document_Link"
                                    placeholder="Enter URL Link"
                                    value={this.state.Document_Link}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="form-group" style={{marginBottom:'15px'}}>
                                    <label style={{marginBottom:'15px'}}>Document name</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Document_name"
                                    placeholder="Enter date"
                                    value={this.state.Document_name}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="form-group" style={{marginBottom:'15px'}}>
                                    <label style={{marginBottom:'15px'}}>Submit date</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Submit_date"
                                    placeholder="Enter date"
                                    value={this.state.Submit_date}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                                    <i className="far fa-check-square"></i>
                                    &nbsp; Update
                                </button>


                            </form>

                        </div>
                    </div>
                </div>

            </div>



        </div>
        )
    }
}

