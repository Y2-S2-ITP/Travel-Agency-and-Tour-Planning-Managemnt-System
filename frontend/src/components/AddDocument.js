import React, { Component } from 'react'
import Header from "./header";
import Navbar from "./navbar";
import PageImage from "./pageimage";
import Sidenavigation from "./sidenavigation";
import Footer from "./footer";
import Menu from './Menu';
import axios from 'axios';

import "../style/addDocument.css"


export default class AddDocument extends Component {
    constructor(props){
        super(props);
        this.state={
        user_name:"",
        user_ID:"",
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
 
     const {Document_name,Document_Link,Country_name,Submit_date,user_name,user_ID} = this.state;
 
     const data = {
        user_ID:user_ID,
        user_name:user_name,
        Document_name:Document_name,
        Document_Link:Document_Link,
        Country_name:Country_name,
        Submit_date:Submit_date
     }
 
     console.log(data)
 
     axios.post('http://localhost:8000/TravelDocAdd/save',data).then((res) =>{
         if(res.data.success){
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
        let token = localStorage.getItem("jwt");
        token = JSON.parse(token)
        let name = token.user.name;
        let id = token.user._id;

        this.setState({user_name:name});
        this.setState({user_ID:id});
    }


    render() {
        return (
            <div>
            <Menu />
            <Navbar />
            <PageImage />
            <Sidenavigation />
            
                <div className="Inquriyform" style={{marginLeft:"30px"}}>
                    <div className="col-md-8 mt-4 mx-auto">
                            <h1 className="h3 mb-3 font-weight-normal" style={{fontSize:"22px"}}>Add Document</h1>
                            <form className="needs-Validation" noValidation>
                                <div className="form-group" style={{marginBottom:'15px'}}>
                                    <label style={{marginBottom:'15px',fontSize:"16px"}}>Country name</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Country_name"
                                    placeholder="Enter country name"
                                    style={{fontSize:"16px"}}
                                    value={this.state.Country_name}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="form-group" style={{marginBottom:'15px',fontSize:"16px"}}>
                                    <label style={{marginBottom:'15px'}}>Document Path</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Document_Link"
                                    placeholder="Enter URL Link"
                                    style={{fontSize:"16px"}}
                                    value={this.state.Document_Link}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="form-group" style={{marginBottom:'15px',fontSize:"16px"}}>
                                    <label style={{marginBottom:'15px'}}>Document name</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Document_name"
                                    placeholder="Enter Document name"
                                    style={{fontSize:"16px"}}
                                    value={this.state.Document_name}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="form-group" style={{marginBottom:'15px',fontSize:"16px"}}>
                                    <label style={{marginBottom:'15px'}}>Submit Date</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Submit_date"
                                    placeholder="Enter the date"
                                    style={{fontSize:"16px"}}
                                    value={this.state.Submit_date}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <button className="btn btn-success" type="submit" style={{marginTop:'15px',fontSize:"16px"}} onClick={this.onSubmit}>
                                    <i className="far fa-check-square"></i>
                                    &nbsp; Send
                                </button>
                                &nbsp;
                                <a href="/Infomation">
                                <button className="btn btn-success" style={{marginTop:'15px',fontSize:"16px"}}>
                                    <i className="far fa-cross"></i>
                                    &nbsp; Canel
                                </button>
                                </a>


                            </form>

                        </div>
                
            </div>

            <div className="footerpartAd">
                        <Footer/>
                        </div>

        </div>
        )
    }
}
