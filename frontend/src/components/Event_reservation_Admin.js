
import React, { useState, useEffect } from 'react';
import k from "../img/k.gif";
import axios from 'axios';


export default function EventReservationPage() {
    const [AdminEventData, setAdminEventData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/reservation/eventticket/").then((res) => {
            setAdminEventData(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    function deleteEvent(id) {
        axios.delete(`http://localhost:8000/reservation/eventticket/delete/${id}`).then(() => {
            alert("Successfully deleted");
        }).catch((err) => {
            alert(err);
        })
    }
    return (

        <div className="container">


            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-5 mt-4 " >
                    <img src={k} width="600px" height="200px " ></img>;
                </div>
            </div>

            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 mt-5 ml-5 mb-4 fw-bold " style={{ height: "500px", overflowY: "scroll", overflow: "auto" }}>
                    <table class="table table-striped table-bordered text-light ml-5" style={{ fontSize: "20px" }}>
                        <thead class="bg-dark text-light">
                            <tr>
                            <th scope="col">User Name</th>
                                <th scope="col">Event Name</th>
                                <th scope="col">Location</th>
                                <th scope="col">No of Tickets</th>
                                <th scope="col">Date</th>
                              
                                <th scope="col">update</th>
                                <th scope="col">Delete</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                AdminEventData.map((val, key) => {
                                    return (
                                        <tr className="bg-light  text-dark">
                                            <td>{val.User_Name}</td>
                                            <td>{val.Event_Name}</td>
                                            <td>{val.Location}</td>
                                            <td>{val.No_Of_Tickets}</td>
                                            <td>{val.Date}</td>
                                            <td><a href={`/ruevent/${val._id}`} className="btn btn-success" style={{ fontSize: "20px" }}>Update</a></td>
                                            <td><input type="button" value="Delete" className="btn btn-danger" style={{ fontSize: "20px" }} onClick={() => deleteEvent(val._id)} /></td>


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