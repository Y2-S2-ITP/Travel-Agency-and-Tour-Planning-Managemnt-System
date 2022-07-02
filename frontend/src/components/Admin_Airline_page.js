
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function AAirlinePage() {


    const [Ticket_Type, setTicketType] = useState("");
    const [From, setFrom] = useState("");
    const [To, setTo] = useState("");
    const [Flight_Number, setFlightNumber] = useState("");
    const [Service_Provider, setServiceProvider] = useState("");
    const [Departure_Time, setDepartureTime] = useState("");
    const [Arrival_Time, setArrivalTime] = useState("");
    const [Date, setDate] = useState("");
    const [No_Of_Seats, setNoOfSeats] = useState("");
    const [Ticket_Fee, setTicketFee] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newAirline = {
            Ticket_Type, From, To, Flight_Number, Service_Provider, Departure_Time, Arrival_Time, Date, No_Of_Seats, Ticket_Fee
        }

        axios.post("http://localhost:8000/admin/airticket/add", newAirline).then(() => {
            alert("Airplane Sucessfully added");

        }).catch((err) => {
            alert(err)
        })
    }
    const [AdminAirlineData, setAdminAirlineData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/admin/airticket/").then((res) => {
            setAdminAirlineData(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    function deleteplane(id) {
        axios.delete(`http://localhost:8000/admin/airticket/delete/${id}`).then(() => {
            alert("Successfully deleted");
        }).catch((err) => {
            alert(err);
        })
    }

    //search part
    const [searchTerm, setSearchTerm] = useState("");


    return (

        <div className="row">

            <div className="col-lg-3">

                <form onSubmit={sendData} className=" text-dark fw-bold mt-4 p-3 " style={{ fontSize: "20px",backgroundColor:"lightskyblue" }}>
                    <center> <h3 className="fw-bold">INSERT PLANE</h3></center>
                    <div className="mt-1">

                        <label for="class">Ticket Type:</label><br />
                        <input type='text' name='Ticket_type' id='type' className='form-control' style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setTicketType(e.target.value);
                            }
                        } />

                    </div>
                    <div className="mt-1">
                        <label for="class">From:</label><br />
                        <select class="form-select" aria-label="Default select example" className="form-control" style={{ fontSize: "20px" }} required onChange={
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

                    <div className=" mt-1">
                        <label for="class">To:</label><br />
                        <select class="form-select" aria-label="Default select example" className="form-control" style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setTo(e.target.value);
                            }
                        }>
                            <option selected>Select</option>
                            <option value="London">London</option>
                            <option value="Indiya">India</option>
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

                    <div className=" mt-1">
                        <label for="class">Flight Number:</label><br />
                        <input type='text' name='Flight_Number' id='fnumber' className='form-control' style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setFlightNumber(e.target.value);
                            }
                        } />

                    </div>
                    <div className="col">
                        <label for="class">Service Provider:</label><br />
                        <select class="form-select" aria-label="Default select example" className='form-control' style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setServiceProvider(e.target.value);
                            }
                        }>
                            <option selected>Select</option>
                            <option value="SriLankanAirline">SriLankan Airline</option>
                            <option value="AirLanka">Air Lanka</option>

                        </select>
                    </div>
                    <div className=" mt-1">
                        <label for="class">Departure Time</label><br />
                        <input type='Time' name='Departure_Time' id='Dtime' className='form-control' style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setDepartureTime(e.target.value);
                            }
                        } />

                    </div>

                    <div className=" mt-1">
                        <label for="class">Arrival Time:</label><br />
                        <input type='Time' name='Arrival_Time' id='Atime' className='form-control' style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setArrivalTime(e.target.value);
                            }
                        } />

                    </div>



                    <div className=" mt-1">
                        <label for="Date">Date:</label><br />
                        <input type='Date' name='Date' id='Atime' className='form-control' style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setDate(e.target.value);
                            }
                        } />



                    </div>
                    <div className=" mt-1">
                        <label for="class">No Of Seats:</label><br />
                        <input type='text' name='No_Of_Seats' id='seat' className='form-control' style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setNoOfSeats(e.target.value);
                            }
                        } />

                    </div>
                    <div className=" mt-1">
                        <label for="class">Ticket Fee:</label><br />
                        <input type='text' name='Ticket_Fee' id='price' className='form-control' style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setTicketFee(e.target.value);
                            }
                        } />

                    </div>

                    <div className="mt-2">
                        <button type="submit" class="btn btn-success form-control fw-bold" style={{ fontSize: "20px" }}>Add now</button>

                    </div>
                    <div className="mt-2">
                        <button type="button" class="btn btn-danger form-control mt-2  fw-bold" style={{ fontSize: "20px" }} >Cancel</button>

                    </div>

                </form>

            </div>


            <div className="col-lg-9 mt-4 " style={{ height: "500px", overflowY: "scroll", overflow: "auto" }}>
               
                    <div className="col-lg-4  p-2 mt-2 mb-2">
                        <input type="search" placeholder="search" name="search" className="form-control" style={{fontSize:"20px",marginTop:"50px"}}
                        onChange={(e)=>{
                           setSearchTerm(e.target.value)
                        }}/>
                    </div>
                
                <h3 className="text-dark fw-bold" style={{marginLeft:"425px"}}>Insert Plane Details</h3>

                <table className="table table-striped table-bordered fw-bold table-hover" style={{ fontSize: "20px" }}>
                    <thead class="bg-dark text-light">
                        <tr>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Flight Number</th>
                            <th scope="col">Service Provider</th>
                            <th scope="col">Departure Time</th>
                            <th scope="col">Arrival Time</th>
                            <th scope="col">Date</th>
                            <th scope="col">No of Seats</th>
                            <th scope="col">Ticket Fee(Rs)</th>
                            <th scope="col">Update </th>
                            <th scope="col"> Delete</th>


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
                                    val.Service_Provider.toLowerCase().includes(searchTerm.toLowerCase())||
                                    val.Flight_Number.toLowerCase().includes(searchTerm.toLowerCase())
                                ){
                                    return val;
                                }
                            })
                            
                            .map((val, key) => {
                                return (
                                    <tr className="bg-light  text-dark">
                                        <td>{val.From}</td>
                                        <td>{val.To}</td>
                                        <td>{val.Flight_Number}</td>
                                        <td>{val.Service_Provider}</td>
                                        <td>{val.Departure_Time}</td>
                                        <td>{val.Arrival_Time}</td>
                                        <td>{val.Date}</td>
                                        <td>{val.No_Of_Seats}</td>
                                        <td>{val.Ticket_Fee}</td>
                                        <td><a className="btn btn-success" style={{ fontSize: "20px" }} href={`/auairline/${val._id}`}>update</a></td>
                                        <td><input type="button" value="Delete" className="btn btn-danger" style={{ fontSize: "20px" }} onClick={() => deleteplane(val._id)} /></td>
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
