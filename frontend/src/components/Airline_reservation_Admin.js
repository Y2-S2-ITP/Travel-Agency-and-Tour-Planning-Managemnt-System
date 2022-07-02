
import React, { useState,useEffect } from 'react';
import p from "../img/p.jpg";
import axios from 'axios';

export default function AirlineReservationPage() {
    const [AdminAirlineData,setAdminAirlineData] =useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/reservation/airticket/").then((res)=>{
            setAdminAirlineData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    function deleteplane(id){
        axios.delete(`http://localhost:8000/reservation/airticket/delete/${id}`).then(()=>{
            alert("Successfully deleted");
        }).catch((err)=>{
            alert(err);
        })
    }

    return (

            <div className="row">
                <div className="col-lg-4 mt-4 " >
                    <img src={p} width="400px" height="300px" ></img>;
                </div>
                <div className="col-lg-8 mt-4 ml-5 mb-4 fw-bold "style={{ height: "700px", overflowY: "scroll", overflow: "auto" }}>
                    <table class="table table-striped table-bordered"style={{ fontSize: "20px" }}>
                        <thead class="bg-dark text-light">
                            <tr>
                                <th scope="col">User Name</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Date</th>
                                <th scope="col">Class</th>
                              
                                <th scope="col">Tickets</th>
                               
                                <th scope="col"> Update</th>
                                <th scope="col"> Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                        {
                            AdminAirlineData.map((val,key)=>{
                              return(
                                <tr className="bg-light  text-dark">
                                    <td>{val.User_Name}</td>
                                    <td>{val.From}</td>
                                    <td>{val.To}</td>
                                    <td>{val.Date}</td>
                                    <td>{val.Class}</td>
                                    <td>{val.Tickets}</td>
                                    <td><a href={`/ruairline/${val._id}`} className="btn btn-success" style={{fontSize:"20px"}}>Update</a></td>
                                    <td><input type="button" value="Delete" className="btn btn-danger" style={{ fontSize: "20px" }}onClick={()=> deleteplane(val._id)}/></td>
                                </tr>
                              ) 
                            })
                        }
                        </tbody>
                    </table>

                </div>
                
            </div>
      

    );

}