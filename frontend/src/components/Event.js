import React, { useState } from 'react';
import event from "../img/ehome.gif";
import axios from 'axios';

export default function EventPage() {
    const [Event_Name, setEventName] = useState("");
    const [Location, setLocation] = useState("");
    const [Date, setDate] = useState("");
    const [No_Of_Tickets, setNoOfTickets] = useState("");

    //Get localstorage Json token
    let user = window.localStorage.getItem("jwt");
    user = JSON.parse(user);
    let User_Name = user.user.name;
    

    function sendData(e) {
        e.preventDefault();

        const newEvent = {
            Event_Name,Location,Date,No_Of_Tickets,User_Name
        }
        
       axios.post("http://localhost:8000/reservation/eventticket/add",newEvent).then(()=>{
            alert(" payment is pending!!! ");
            
        }).catch((err)=>{
            alert(err)
        })
    }
    return (
        <div className="container" >
           
           <div className="row">
          <div className="lg-2"></div>
            <div className="col mt-4">
                <img src={event} width="500px" height="600px"></img>
                <div className="mt-5"></div>
            
            </div>
          
                   <div className="col-lg-1"></div>
                   
                   <form className="col  text-light  p-5 fw-bold mt-4 mr-5 "style={{ fontSize: "20px",backgroundColor:"lightseagreen" }}onSubmit={sendData} >
                     
                    <center>
                    <div className="row-lg-9 mt-3">
                        <label for="class">Event Name:</label><br />
                        <select class="form-select" aria-label="Default select example"style={{ fontSize: "20px" }}onChange={
                            (e) => {
                                setEventName(e.target.value);
                            }
                        }>
                            <option selected>Select</option>
                            <option value="Happy New Year">Happy New Year</option>
                            <option value="Chritmas">chritmas</option>
                            <option value="Holy Festival">holy Festival</option>

                        </select>
                        </div>
                        <div className="row-lg-9 mt-3">
                        <label for="class">Location:</label><br />
                        <select class="form-select" aria-label="Default select example"style={{ fontSize: "20px" }}onChange={
                            (e) => {
                                setLocation(e.target.value);
                            }
                        }>
                            <option selected>Select</option>
                            <option value="Hambanthota">Hambanthota</option>
                            <option value="Matara Fort">Matara Fort </option>
                            <option value="Galle Fort">Galle Fort</option>

                        </select>  
                        </div>
                    
                    <div className="row-lg-9 mt-3">
                    <label for="class">No of Tickets:</label><br />
                        <select class="form-select" aria-label="Default select example"style={{ fontSize: "20px" }}onChange={
                            (e) => {
                                setNoOfTickets(e.target.value);
                            }
                        }>
                            <option selected>Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>

                        </select>    
                        
                    <div>
                    <div className="row-lg-12 mt-3">
                        <label for="Date">Date:</label><br />
                        <input type='Date'  name='Date' id='date' className='form-control' style={{ fontSize: "20px" }}onChange={
                            (e) => {
                                setDate(e.target.value);
                            }
                        }/>



                    </div>
                    <div className="row-lg-12 mt-4">
                        <button type="submit" class="btn btn-success form-control fw-bold"style={{ fontSize: "20px" }}>Book now</button>
                        
                    </div>
            <div className="mt-1"></div>    
            </div>
            <a href="/ticketPayment"> <button type="button" class="btn btn-warning form-control mt-2   fw-bold" style={{ fontSize: "20px" }}>Payment</button></a>

           <a href="/ticketManagement"> <button type="button" class="btn btn-danger form-control mt-2   fw-bold" style={{ fontSize: "20px" }}>Cancel</button></a>
            </div>
            
            </center>
</form>
<div className="col "></div></div>
<div className="mt-5"></div> 


 
 </div>
       
    );

}