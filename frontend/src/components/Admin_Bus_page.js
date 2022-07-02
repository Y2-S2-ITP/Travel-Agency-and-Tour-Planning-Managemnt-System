import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function ABusPage() {


    const [Ticket_Type, setTicketType] = useState("");
    const [From, setFrom] = useState("");
    const [To, setTo] = useState("");
    const [Distance, setDistance] = useState("");
    const [Ticket_Fee, setTicketFee] = useState("");
    const [Begging_Time, setBeggingTime] = useState("");
    const [Arrival_Time, setArrivalTime] = useState("");
    const [Date, setDate] = useState("");


    function sendData(e) {
        e.preventDefault();

        const newBus = {
            Ticket_Type, From, To, Distance, Begging_Time, Arrival_Time, Date, Ticket_Fee
        }

        axios.post("http://localhost:8000/admin/busticket/add", newBus).then(() => {
            alert("Bus Sucessfully added");

        }).catch((err) => {
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


    function deleteBus(id) {
        axios.delete(`http://localhost:8000/admin/busticket/delete/${id}`).then(() => {
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

                    <form onSubmit={sendData} className="text-dark fw-bold mt-4 p-3 "style={{ fontSize: "20px",backgroundColor:"lightskyblue" }}>
                        <center> <h3 className="fw-bold">INSERT BUS</h3></center>

                        <div className="mt-1">
                            <label for="class">Ticket Type:</label><br />
                            <input type='text' name='type' id='type' className='form-control' style={{ fontSize: "20px" }} required onChange={
                                (e) => {
                                    setTicketType(e.target.value);
                                }
                            } />
                        </div>


                        <div className="mt-1">
                            <label for="class">From:</label><br />
                            <select class="form-select" aria-label="Default select example"  className="form-control" style={{ fontSize: "20px" }} required onChange={
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
                                <option value="Avissawella">Avissawella</option>
                            </select>
                        </div>

                        <div className=" mt-1">
                            <label for="class">To:</label><br />
                            <select class="form-select" aria-label="Default select example" className="form-control" style={{ fontSize: "20px" }} required  onChange={
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
                                <option value="Avissawell">Avissawella</option>


                            </select>
                        </div>

                        <div className=" mt-1">
                            <label for="class">Distance:</label><br />

                            <input type='text' name='distance' id='distance' className='form-control' style={{ fontSize: "20px" }} required onChange={
                                (e) => {
                                    setDistance(e.target.value);
                                }
                            } />


                        </div>

                        <div className=" mt-1">
                            <label for="class">Ticket Fee:</label><br />
                            <input type='text' name='price' id='price' className='form-control' style={{ fontSize: "20px" }} required onChange={
                                (e) => {
                                    setTicketFee(e.target.value);
                                }
                            } />

                        </div>

                        <div className=" mt-1">
                            <label for="class">Begging Time:</label><br />
                            <input type='Time' name='btime' id='btime' className='form-control' style={{ fontSize: "20px" }} required onChange={
                                (e) => {
                                    setBeggingTime(e.target.value);
                                }
                            } />

                        </div>

                        <div className=" mt-1">
                            <label for="class">Arrival Time:</label><br />
                            <input type='Time' name='atime' id='atime' className='form-control'style={{ fontSize: "20px" }} required onChange={
                                (e) => {
                                    setArrivalTime(e.target.value);
                                }
                            }/>

                        </div>

                        <div className=" mt-1">
                            <label for="Date">Date:</label><br />
                            <input type='Date' name='atime' id='atime' className='form-control' style={{ fontSize: "20px" }} required  onChange={
                                (e) => {
                                    setDate(e.target.value);
                                }
                            } />



                        </div>
                        <div className="mt-2">
                            <button type="submit" class="btn btn-success form-control  fw-bold" style={{ fontSize: "20px" }} >Add now</button>

                        </div>
                        <div className="mt-2">
                            <button type="button" class="btn btn-danger form-control mt-2   fw-bold"style={{ fontSize: "20px" }}>Cancel</button>

                        </div>

                    </form>

                </div>

                <div className="col-lg-9 " style={{ height: "500px", overflowY: "scroll", overflow: "auto" }}>

                <div className="col-lg-4  p-2  mt-3">
                        <input type="search" placeholder="search" name="search" className="form-control" style={{fontSize:"20px",marginTop:"50px"}} 
                        onChange={(e)=>{
                           setSearchTerm(e.target.value)
                        }}/>
                    </div>

                    <h3 className="text-dark fw-bold" style={{marginLeft:"425px"}} >Insert Bus Details</h3>

                    <table className="table table-striped table-bordered fw-bold table-hover ml-1"style={{ fontSize: "20px" }}>
                        <thead class="bg-dark text-light">
                            <tr>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Distance</th>
                                <th scope="col">Ticket Fee(Rs)</th>
                                <th scope="col">Begging Time</th>
                                <th scope="col">Arrival TIme</th>
                                <th scope="col">Date</th>
                                <th scope="col">Update </th>
                                <th scope="col"> Delete</th>


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
                                            <td>{val.Ticket_Fee}</td>
                                            <td>{val.Begging_Time}</td>
                                            <td>{val.Arrival_Time}</td>
                                            <td>{val.Date}</td>
                                            <td><a  className="btn btn-success" style={{ fontSize: "20px" }} href={`/aubus/${val._id}`}>update</a></td>
                                            <td><input type="button" value="Delete" className="btn btn-danger"style={{ fontSize: "20px" }} onClick={() => deleteBus(val._id)} /></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>

                </div>
                <div>
                    <div className="container ml-5">
                </div>
                </div>
            </div>
    

    );

}
