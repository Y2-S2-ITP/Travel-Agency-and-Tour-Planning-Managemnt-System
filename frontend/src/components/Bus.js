
import React, { useState,useEffect } from 'react';
import bus from "../img/bus.gif";
import axios from 'axios';

export default function BusPage() {


    const [From, setFrom] = useState("");
    const [To, setTo] = useState("");
    const [Date, setDate] = useState("");
    const [Tickets, setTickets] = useState("");


    //Get localstorage Json token
    let user = window.localStorage.getItem("jwt");
    user = JSON.parse(user);
    let User_Name = user.user.name;

    function sendData(e) {
        e.preventDefault();

        const newbbus = {
            From,To,Date,Tickets,User_Name
        }
        
       axios.post("http://localhost:8000/reservation/busticket/add",newbbus).then(()=>{
            alert("payment is pending!!! ");
            
        }).catch((err)=>{
            alert(err)
        })
    }
    const [AdminBusData, setAdminBusData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/admin/busticket/").then((res) => {
            setAdminBusData(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
//search part
const [searchTerm, setSearchTerm] = useState("");




    return (


       <div className="container">
           <div className="mt-3"></div>
            <form className="text-dark  p-3 pb-4  fw-bold mt-5" style={{ fontSize: "20px",backgroundColor:"lightblue" }} >
                <div className="row mt-2">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2" >

                        <label for="from ">From:</label><br />
                        <select class="form-select" aria-label="Default select example"style={{ fontSize: "20px" }}onChange={
                            (e) => {
                                setFrom(e.target.value);
                            }
                        }>
                          <option selected>Select</option>
                            <option value="Hambanthota">Hambanthota</option>
                            <option value="Middeniya">Middeniya</option>
                            <option value="Badulla">Badulla</option>
                            <option value="Colombo">Colombo</option>
                            <option value="Katharagama">Katharagama</option>
                            <option value="Matara">Matara</option>
                            <option value="Jaffna">Jaffna</option>
                            <option value="Galle">Galle</option>
                            <option value="Ampara">Ampara</option>
                            <option value="Kaluthara">Kaluthara</option>
                            <option value="Monaragala">Monaragala</option>
                            <option value="Kirinda">Kirinda</option>
                            <option value="Kurunagala">Kurunagala</option>
                            <option value="Walasmulla">Walasmulla</option>
                            <option value="Thissa">Thissa</option>
                            <option value="Ambalangoda">Ambalangoda</option>
                            <option value="4">Avissawella</option>

                        </select>
                    </div>

                    <div className="col-lg-2" >
                        <label for="To">To:</label><br />

                        <select class="form-select" aria-label="Default select example"style={{ fontSize: "20px" }}onChange={
                            (e) => {
                                setTo(e.target.value);
                            }
                        }>
                            <option selected>Select</option>
                            <option value="Hambanthota">Hambanthota</option>
                            <option value="Middeniya">Middeniya</option>
                            <option value="Badulla">Badulla</option>
                            <option value="Colombo">Colombo</option>
                            <option value="Katharagama">Katharagama</option>
                            <option value="Matara">Matara</option>
                            <option value="Jaffna">Jaffna</option>
                            <option value="Galle">Galle</option>
                            <option value="Ampara">Ampara</option>
                            <option value="Kaluthara">Kaluthara</option>
                            <option value="Monaragala">Monaragala</option>
                            <option value="Kirinda">Kirinda</option>
                            <option value="Kurunagala">Kurunagala</option>
                            <option value="Walasmulla">Walasmulla</option>
                            <option value="Thissa">Thissa</option>
                            <option value="Ambalangoda">Ambalangoda</option>
                            <option value="4">Avissawella</option>


                        </select>
                    </div>
                    <div className="col-lg-2">
                        <label for="Date">Date:</label><br />
                        <input type='Date'  name='date' id='date' className='form-control'style={{ fontSize: "20px" }} onChange={
                            (e) => {
                                setDate(e.target.value);
                            }
                        }/>



                    </div>
                    <div className="col-lg-2">
                        <label for="ticket">Tickets:</label><br />
                        <select class="form-select" aria-label="Default select example"style={{ fontSize: "20px" }}onChange={
                            (e) => {
                                setTickets(e.target.value);
                            }
                        }>
                            <option selected>No of Tickets</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div className="col-lg-2 mt-4">
                     <a href="/ticketpayment" >  <button type="button" class="btn btn-success form-control fw-bold" style={{ fontSize: "20px" }}onClick={sendData}>Book now</button></a>
                     <a href="/ticketPayment">  <button type="button" class="btn btn-warning form-control mt-4   fw-bold"style={{ fontSize: "20px" }} >Payment</button></a>
                     <a href="/ticketManagement">  <button type="button" class="btn btn-danger form-control mt-4   fw-bold"style={{ fontSize: "20px" }} >Cancel</button></a>
                    </div>

                </div>
            </form>
           
            <div className="row">
                <div className="col-lg-5 mt-4 mb-5">
               
                    <img src={bus} width="500px" height="450px"  ></img>;
                    <div className="mt-5"></div>
                </div>
           

                <div className="col-lg-7 mt-4 fw-bold "style={{ height: "500px", overflowY: "scroll", overflow: "auto" }}>

                <div className="col-lg-4  p-2 mt-2 mb-2">
                        <input type="search" placeholder="search" name="search" className="form-control" style={{fontSize:"20px"}} 
                        onChange={(e)=>{
                           setSearchTerm(e.target.value)
                        }}/>
                    </div>

                 <center>   <h3 className="text-dark fw-bold mt-3">Bus Time Table</h3></center>
                    <table class="table table-striped table-bordered table-hover bg-light "style={{ fontSize: "20px" }}>
                        <thead class="bg-dark text-light">
                            <tr>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Distance(KM)</th>
                                <th scope="col">Arrival TIme</th>
                                <th scope="col">Begining Time</th>
                                <th scope="col">Price (Rs)</th>

                            </tr>
                        </thead>
                        <tbody>
                        {
                                AdminBusData.filter(val=>{
                                    if(searchTerm===""){
                                        return val;
                                    }
                                    else if(
                                        val.From.toLowerCase().includes(searchTerm.toLowerCase())||
                                        val.To.toLowerCase().includes(searchTerm.toLowerCase())
                                       
                                    ){
                                        return val;
                                    }
                                })
                                
                                 .map((val, key) => {
                                    return (
                                        <tr className="bg-light  text-dark">
                                            <td>{val.From}</td>
                                            <td>{val.To}</td>
                                            <td>{val.Distance}</td>
                                            <td>{val.Arrival_Time}</td>
                                            <td>{val.Begging_Time}</td>
                                            <td>{val.Ticket_Fee}</td>
                                            
                                            </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>

                   

                </div>
            </div>

            
            <div className="mt-5"></div>
        </div>


    );

}