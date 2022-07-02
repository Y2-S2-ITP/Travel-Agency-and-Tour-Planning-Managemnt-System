
import React, { useState,useEffect } from 'react';
import t from "../img/t.jpeg";
import axios from 'axios';



export default function TrainReservationPage() {
    const [AdminTrainData, setAdminTrainData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/reservation/trainticket/").then((res) => {
            setAdminTrainData(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    function deleteTrain(id) {
        axios.delete(`http://localhost:8000/reservation/trainticket/delete/${id}`).then(() => {
            alert("Successfully deleted");
        }).catch((err) => {
            alert(err);
        })
    }
    return (
        <div className="container">
            
            <div className="row">
                <div className="col-lg-5 mt-4">
                    <img src={t} width="500px" height="400px" ></img>;
                </div>
                <div className="col-lg-7 mt-4 ml-2  fw-bold"style={{ height: "300px", overflowY: "scroll", overflow: "auto" }}>

                    <table class="table table-striped table-bordered table-hover bg-light "style={{ fontSize: "20px" }}>
                        <thead class="bg-dark text-light">
                            <tr>
                                <th scope="col">User Name </th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Date</th>
                                <th scope="col">Tickets</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                                   
                                

                            </tr>
                        </thead>
                        <tbody>
                        {
                            AdminTrainData.map((val,key)=>{
                              return(
                                <tr className="bg-light  text-dark">

                                    <td>{val.User_Name}</td>
                                    <td>{val.From}</td>
                                    <td>{val.To}</td>
                                    <td>{val.Date}</td>
                                    <td>{val.Tickets}</td>
                                    <td><a href={`/rutrain/${val._id}`} className="btn btn-success" style={{ fontSize: "20px" }}>Update</a></td>
                                    <td><input type="button" value="Delete" className="btn btn-danger" style={{ fontSize: "20px" }}onClick={()=> deleteTrain(val._id)}/></td>
                                </tr>
                              ) 
                            })
                        }
                            
                        </tbody>
                    </table>

                </div>
                
            </div>
        </div>

    );

}