import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RUBusPage(props) {


    //get id from parameter
    const id = props.match.params.id;

    //set useEffect data
    const [data, setData] = useState("");

    //get data using id
    useEffect(() => {

        axios.put(`http://localhost:8000/reservation/busticket/update/${id}`).then((res) => {
            console.log(res.data);
            setData(res.data);
        }).catch((err) => {
            console.log(err);
        })

    }, [])


    //get input field data
    const handlechange = (e) => {

        const { name, value } = e.target;
        setData({ ...data, [name]: value });

    }

    // update data  
    function sendData(e) {
        e.preventDefault();
        const id = props.match.params.id;


        axios.put(`http://localhost:8000/reservation/busticket/update/${id}`, data).then(() => {
            alert("Bus Reservation Details Sucessfully updated");

        }).catch((err) => {
            alert(err)
        })
        //window.location.href = "/abus";
    }

    return (


        <div className="container">
            <div className="mt-3 col-lg-4"></div>
            <div className="mt-3 col-lg-4">
                <center>
                <h3 className="text-dark fw-b mt-2">Bus Reservation Update</h3>
               
                <form className=" text-dark  p-3 pb-4 mt-2 fw-bold" style={{ fontSize: "20px",backgroundColor:"lightseagreen",width:"85%" }} onSubmit={sendData} >
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="form-group" >

                            <label for="from">From:</label><br />
                            <select class="form-select" aria-label="Default select example" value={data.From} name='From' style={{ fontSize: "20px" }} onChange={handlechange}>
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

                        <div className="form-group" >
                            <label for="To">To:</label><br />

                            <select class="form-select" aria-label="Default select example" value={data.To} name='To' style={{ fontSize: "20px" }} onChange={handlechange}>
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
                        <div className="form-group">
                            <label for="Date">Date:</label><br />
                            <input type='Date' id='date' className='form-control' value={data.Date} name='Date' style={{ fontSize: "20px" }} onChange={handlechange} />
                        </div>
                        <div className="form-group">
                            <label for="ticket">Tickets:</label><br />
                            <select class="form-select" aria-label="Default select example" value={data.Tickets} name='Tickets' style={{ fontSize: "20px" }} onChange={handlechange} >
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
                        <div className="form-group">
                            <button type="submit" class="btn btn-success form-control fw-bold mt-3" style={{ fontSize: "20px" }}>Update</button>&nbsp;
                            <button type="submit" class="btn btn-danger form-control fw-bold " style={{ fontSize: "20px" }}>Cancel</button>
                        </div>

                    </div>

                </form>
                
                </center>
            </div>
            
            <div className="col-lg-4"></div>
            
        </div>

    );

}