
import React, { useState,useEffect } from 'react';
import Train from "../img/tra.gif";
import axios from 'axios';


export default function TrainPage() {

   
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

        const newttrain = {
            From,To,Date,Tickets,User_Name
        }
        
       axios.post("http://localhost:8000/reservation/trainticket/add",newttrain).then(()=>{
            alert(" payment is pending !!! ");
            
        }).catch((err)=>{
            alert(err)
        })
    }

    const [AdminTrainData,setAdminTrainData] =useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/admin/trainticket/").then((res)=>{
            setAdminTrainData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
   //search part
   const [searchTerm, setSearchTerm] = useState("");

 return (
        <div className="container ">
            <div className="mt-3"></div>
            <form className=" p-3 pb-4 fw-bold mt-5"style={{ fontSize: "20px",backgroundColor:"lightblue" }} >
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2" >

                        <label for="from">From:</label><br />
                        <select class="form-select" aria-label="Default select example"style={{ fontSize: "20px"}}onChange={
                            (e) => {
                                setFrom(e.target.value);
                            }
                        }>
                            <option selected>Select</option>
                            <option value="Ambewela">Ambewela</option>

                            <option value="Abanpola">Abanpola</option>
                            <option value="Akurala">Akurala</option>
                            <option value="Ambalangoda">Ambalangoda</option>
                            <option value="Avissawella">Avissawella</option>
                            <option value="Balana">Balana</option>
                            <option value="Beruwala">Beruwala</option>
                            <option value="chilaw">chilaw</option>
                            <option value="ColomboFort">Colombo Fort</option>
                            <option value="Demodara">Demodara</option>
                            <option value="Elle">Elle</option>
                            <option value="Gampaha">Gampaha</option>
                            <option value="Haliela">Haliela</option>
                        </select>
                    </div>

                    <div className="col-lg-2" >
                        <label for="To">To:</label><br />

                        <select class="form-select" aria-label="Default select example" style={{ fontSize: "20px"}}onChange={
                            (e) => {
                                setTo(e.target.value);
                            }
                        }>
                            <option selected>Select</option>
                            <option value="Ambewela">Ambewela</option>

                            <option value="Abanpola">Abanpola</option>
                            <option value="Akurala">Akurala</option>
                            <option value="Ambalangoda">Ambalangoda</option>
                            <option value="Avissawella">Avissawella</option>
                            <option value="Balana">Balana</option>
                            <option value="Beruwala">Beruwala</option>
                            <option value="chilaw">chilaw</option>
                            <option value="ColomboFort">Colombo Fort</option>
                            <option value="Demodara">Demodara</option>
                            <option value="Elle">Elle</option>
                            <option value="Gampaha">Gampaha</option>
                            <option value="Haliela">Haliela</option>
                        </select>
                    </div>
                    <div className="col-lg-2">
                        <label for="Date">Date:</label><br />
                        <input type='Date'  name='date' id='date' className='form-control' style={{ fontSize: "20px"}}onChange={
                            (e) => {
                                setDate(e.target.value);
                            }
                        }/>



                    </div>
                    <div className="col-lg-2">
                        <label for="ticket">Tickets:</label><br />
                        <select class="form-select" aria-label="Default select example" style={{ fontSize: "20px"}}onChange={
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
                    <a href="/ticketpayment" >    <button type="button" class="btn btn-success form-control fw-bold" style={{ fontSize: "20px"}} onClick={sendData} >Book now</button></a>
                    <a href="/ticketpayment" >    <button type="button" class="btn btn-warning form-control mt-3 fw-bold" style={{ fontSize: "20px"}}>Payment</button></a>
                    <a href="/ticketManagement" > <button type="button" class="btn btn-danger form-control mt-4 fw-bold"style={{ fontSize: "20px"}} >Cancel</button></a>

                    </div>

                </div>
            </form>

            <div className="row">
                <div className="col-lg-5 mt-5">
                    <img src={Train} width="500px" height="400px" ></img>;
                    
                </div>
                <div className="col-lg-7 mt-4 ml-2  fw-bold"style={{ height: "500px", overflowY: "scroll", overflow: "auto" }}>
                  
                <div className="col-lg-4  p-2 mt-2 mb-2">
                        <input type="search" placeholder="search" name="search" className="form-control" style={{fontSize:"20px"}} 
                        onChange={(e)=>{
                           setSearchTerm(e.target.value)
                        }}/>
                    </div>


                <center>   <h3 className="text-dark fw-bold mt-2">Train Time Table</h3></center>
                    <table class="table table-striped table-bordered table-hover bg-light "style={{ fontSize: "20px" }}>
                        <thead class="bg-dark text-light"style={{ fontSize: "20px"}}>
                            <tr>
                                <th scope="col">From</th>
                                <th scope="col">To</th>

                                <th scope="col">Distance</th>
                                <th scope="col">Arrival TIme</th>
                                <th scope="col">Begining Time</th>
                                <th scope="col">Price (Rs)</th>

                            </tr>
                        </thead>
                        <tbody>
                        {
                            AdminTrainData.filter(val=>{
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
                            
                            
                            
                            
                            
                            
                            
                            
                            .map((val,key)=>{
                              return(
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