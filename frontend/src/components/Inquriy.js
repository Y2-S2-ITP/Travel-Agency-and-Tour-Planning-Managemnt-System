import React, { Component } from 'react'
import Header from "./header";
import Navbar from "./navbar";
import PageImage from "./pageimage";
import Sidenavigation from "./sidenavigation";
import Footer from "./footer";
import Layout from "./Layout"
import axios from 'axios';
import Menu from "./Menu"


import "../style/inquriy.css"

export default class Inquriy extends Component {

    constructor(props){
        super(props);
        this.state={
        Subject_type:"",
        Phone_no:"",
        Name:"",
        Message_Inquriy:""
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
 
     const {Subject_type,Phone_no,Name,Message_Inquriy} = this.state;
 
     const data = {
        Subject_type:Subject_type,
        Phone_no:Phone_no,
        Name:Name,
        Message_Inquriy:Message_Inquriy
     }
 
     console.log(data)
 
     axios.post('http://localhost:8000/TravelDocInquriy/save',data).then((res) =>{
         if(res.data.success){
             this.setState(
                 {
                    Subject_type:"",
                    Phone_no:"",
                    Name:"",
                    Message_Inquriy:""
                 }
             )
         }
     })
 
    }


    render() {
        return (
          <div>
            <Menu/>
            <Navbar />
            <PageImage />
            <Sidenavigation />
            
                <div className="Inquriyform" style={{marginLeft:"40px"}}>
                    <div className="col-md-8 mt-4 mx-auto">
                            <h1 className="h3 mb-3 font-weight-normal" style={{fontSize:"22px"}}>Inquire Now</h1>
                            <br/>
                            <form className="needs-Validation" noValidation>
                                <div className="form-group" style={{marginBottom:'15px'}}>
                                    <label style={{marginBottom:'15px',fontSize:"16px"}}>Subject</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Subject_type"
                                    placeholder="Enter Subject"
                                    style={{fontSize:"16px"}}
                                    value={this.state.Subject_type}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="form-group" style={{marginBottom:'15px',fontSize:"16px"}}>
                                    <label style={{marginBottom:'15px'}}>Phone</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Phone_no"
                                    placeholder="Enter Phone number"
                                    style={{fontSize:"16px"}}
                                    value={this.state.Phone_no}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="form-group" style={{marginBottom:'15px',fontSize:"16px"}}>
                                    <label style={{marginBottom:'15px'}}>Name</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Name"
                                    placeholder="Enter name"
                                    style={{fontSize:"16px"}}
                                    value={this.state.Name}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <div className="form-group" style={{marginBottom:'15px',fontSize:"16px"}}>
                                    <label style={{marginBottom:'15px'}}>Message</label>
                                    <input type="text"
                                    className="form-control"
                                    name="Message_Inquriy"
                                    placeholder="Enter the message"
                                    style={{fontSize:"16px"}}
                                    value={this.state.Message_Inquriy}
                                    onChange={this.handleInputChange}/>
                                </div>

                                <button className="btn btn-success"  type="submit" style={{marginTop:'15px',fontSize:"16px"}} onClick={this.onSubmit}>
                                    <i className="far fa-check-square" ></i>
                                    &nbsp; Send
                                </button>


                            </form>
                
            </div>
             
            </div>
                        <div className="footerpartIn">
                        <Footer/>
                        </div>


        </div>
        )
    }
}

