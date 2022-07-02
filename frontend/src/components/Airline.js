
import React, { useState,useEffect } from 'react';
import airplane from "../img/plane.gif";
import axios from 'axios';

export default function AirlinePage() {
    const [From, setFrom] = useState("");
    const [To, setTo] = useState("");
    const [Date, setDate] = useState("");
    const [Tickets, setTickets] = useState("");
    const [Class, setClass] = useState("");
    const [Service_Provider, setService_Provider] = useState("");
    const [Seat_Number, setSeatNumber] = useState("");


    //Get localstorage Json token
    let user = window.localStorage.getItem("jwt");
    user = JSON.parse(user);
    let User_Name = user.user.name;
    

    function sendData(e) {
        e.preventDefault();

        const newtairline= {
            From,To,Date,Tickets,Class,Service_Provider,Seat_Number,User_Name
        }
        
       axios.post("http://localhost:8000/reservation/airticket/add",newtairline).then(()=>{
            alert(" payment is pending!!! ");
            
        }).catch((err)=>{
            alert(err)
        })
    }
    const [AdminAirlineData,setAdminAirlineData] =useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/admin/airticket/").then((res)=>{
            setAdminAirlineData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
//search part
const [searchTerm, setSearchTerm] = useState("");


    return (

        <div className="container">
            
              <div className="mt-5"></div>
            <form onSubmit={sendData} className="text-dark tc-light p-3 pb-4  fw-bold" style={{ fontSize: "20px",backgroundColor:"lightblue" }} >
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2" >

                        <label for="from">From:</label><br />
                        <select class="form-select" aria-label="Default select example" style={{ fontSize: "20px" }}required onChange={
                            (e) => {
                                setFrom(e.target.value);
                            }
                        }>
                            <option selected>Select</option>
                            <option value="London">London</option>
                            <option value="India">India</option>
                            <option value="SriLanka">Sri Lanka</option>
                            <option value="Australia">Australia</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Melbourne">Melbourne</option>
                            <option value="America">America</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="canada">canada</option>
                            <option value="France">France</option>
                            <option value="Iceland">Iceland</option>
                            <option value="Japan">Japan</option>
                        </select>
                    </div>

                    <div className="col-lg-2" >
                        <label for="To">To:</label><br />

                        <select class="form-select" aria-label="Default select example" style={{ fontSize: "20px" }}required onChange={
                            (e) => {
                                setTo(e.target.value);
                            }
                        }>
                            <option selected>Select</option>
                            <option value="London">London</option>
                            <option value="India">India</option>
                            <option value="SriLanka">Sri Lanka</option>
                            <option value="Australia">Australia</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Melbourne">Melbourne</option>
                            <option value="America">America</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="canada">canada</option>
                            <option value="France">France</option>
                            <option value="Iceland">Iceland</option>
                            <option value="Japan">Japan</option>
                        </select>
                    </div>
                    <div className="col-lg-2">
                        <label for="Date">Date:</label><br />
                        <input type='Date'  name='date' id='date' className='form-control'style={{ fontSize: "20px" }}required onChange={
                            (e) => {
                                setDate(e.target.value);
                            }
                        }/>



                    </div>
                    <div className="col-lg-2">
                        <label for="ticket">Tickets:</label><br />
                        <select class="form-select" aria-label="Default select example"style={{ fontSize: "20px" }} required onChange={
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
                    <div className="col-lg-2 mt-5">
                        <button type="submit" class="btn btn-success form-control fw-bold" style={{ fontSize: "20px" }}  >Book now</button>
                        

                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2 mt-4 ">
                        <label for="class">Class:</label><br />
                        <select class="form-select" aria-label="Default select example"style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setClass(e.target.value);
                            }
                        }>
                            <option selected>Select</option>
                            <option value="classA">Class A</option>
                            <option value="classB">Class B</option>
                            <option value="classC">Class C</option>
                        </select>
                    </div>

                    <div className="col-lg-2 mt-4">
                        <label for="class">Service Provider:</label><br />
                        <select class="form-select" aria-label="Default select example"style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setService_Provider(e.target.value);
                            }
                        }>
                            <option selected>Select</option>
                            <option value="SriLankanAirline">SriLankan Airline</option>
                            <option value="AirLanka">Air Lanka</option>

                        </select>
                    </div>
                    <div className="col-lg-2 mt-4">
                        <label for="class">Seat Number:</label><br />
                        <select class="form-select" aria-label="Default select example"style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setSeatNumber(e.target.value);
                            }
                        }>
                            <option selected>seat Number</option>
                            <option value="s1">seat 1</option>
                            <option value="s2">seat 2</option>
                            <option value="s3">seat 3</option>

                        </select>
                    </div>
                    <div className='col-lg-2 mt-4'></div>
                    <div className="col-lg-2 mt-4  ml-4">
                    <a href="/ticketPayment">  <button type="button" class="btn btn-warning form-control mt-2   fw-bold"style={{ fontSize: "20px" }} >Payment</button></a>

                      <a href="/ticketManagement">  <button type="button" class="btn btn-danger form-control mt-4 bg-danger  fw-bold"style={{ fontSize: "20px" }} >Cancel</button></a>
                     
                    </div>
                </div>
            </form>

            <div className="row">
                <div className="col-lg-5 mt-5 " >
                
                    <img src={airplane} width="500px" height="450px" ></img>;
                   
                    <div className="mt-5 "></div>
                </div>
                
                <div className="col-lg-7 mt-4 ml-5 mb-4 fw-bold "style={{ height: "500px", overflowY: "scroll", overflow: "auto" }}>
 
                    
                <div className="col-lg-4  p-2 mt-2 mb-2">
                        <input type="search" placeholder="search" name="search" className="form-control" style={{fontSize:"20px"}} 
                        onChange={(e)=>{
                           setSearchTerm(e.target.value)
                        }}/>
                    </div>
                <center>   <h3 className="text-dark fw-bold mt-2 ">Airline Time Table</h3></center>
                    <table class="table table-striped table-bordered table-hover bg-light"style={{ fontSize: "20px" }} >
                        <thead class="bg-dark text-light">
                            <tr>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Departure Time</th>
                                <th scope="col">Arrival Time</th>
                                <th scope="col">Flight Number</th>
                                <th scope="col">Ticket fee(RS)</th>

                            </tr>
                        </thead>
                        <tbody>
                        {
                            AdminAirlineData.filter(val=>{
                                if(searchTerm===""){
                                    return val;
                                }
                                else if(
                                    val.From.toLowerCase().includes(searchTerm.toLowerCase())||
                                    val.To.toLowerCase().includes(searchTerm.toLowerCase())||
                                    val.Flight_Number.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                                   
                                ){
                                    return val;
                                }
                            })
                            
                            
                            
                            
                            
                            .map((val,key)=>{
                              return(
                                <tr className="bg-light  text-dark">
                                    <td>{val.From}</td>
                                    <td>{val.To}</td>
                                    <td>{val.Departure_Time}</td>
                                    <td>{val.Arrival_Time}</td>
                                    <td>{val.Flight_Number}</td>
                                    <td>{val.Ticket_Fee}</td>
                                
                                </tr>
                              ) 
                            })
                        }
                        </tbody>
                        
                    </table>
                   
                </div>
                <div className="mt-5"></div>
            </div>
            
        </div>

    );

}