import React, { useState, useEffect } from 'react';

import axios from 'axios';


export default function AUpdateReservation(props) {
    //get id from parameter
    const id = props.match.params.id;
    
    const [data, setData] = useState([]);

    function sendData(e) {
        e.preventDefault();


        axios.put(`http://localhost:8000/reservation/airticket/update/${id}`, data).then(() => {
            alert(" Airline Reservation Details Sucessfully updated ");

        }).catch((err) => {
            alert(err)
        })
    }

    const handlechange = (e) => {

        const { name, value } = e.target;
        setData({ ...data, [name]: value });

    }



    useEffect(() => {
        axios.get(`http://localhost:8000/reservation/airticket/${id}`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])



    return (

        <div className="container">

            <div className="mt-5"></div>
            <h3 className="text-dark fw-dark mt-5"><center>Airline Reservation Update</center></h3>
            <center>
            <form onSubmit={sendData} className=" text-dark tc-light p-5 pb-4 mt-2 formgroup fw-bold" style={{ fontSize: "20px",backgroundColor:"lightseagreen" , width:"30%" }} >
                <div className="Formgroup">
                  
                    
                        <label for="from">From:</label><br />
                        <select class="form-select" aria-label="Default select example" value={data.From} name='From' style={{ fontSize: "20px" }} onChange={handlechange} required>
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
                   
                    <div className="row" >
                        <label for="To">To:</label><br />

                        <select class="form-select" aria-label="Default select example"  value={data.To} name='To'   onChange={handlechange} style={{ fontSize: "20px" }} required>
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
                    <div className="row">
                        <label for="Date">Date:</label><br />
                        <input type='Date' name='date' id='date' className='form-control'value={data.Date} name='Date' onChange={handlechange} style={{ fontSize: "20px" }} required />



                    </div>
                    <div className="row">
                        <label for="ticket">Tickets:</label><br />
                        <select class="form-select" aria-label="Default select example" value={data.Tickets} name='Tickets' onChange={handlechange} style={{ fontSize: "20px" }} required>
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

                </div>
                <div className="row">
                   
                        <label for="class">Class:</label><br />
                        <select class="form-select" aria-label="Default select example" value={data.Class} name='Class'onChange={handlechange} style={{ fontSize: "20px" }} required>
                            <option selected>Select</option>
                            <option value="classA">Class A</option>
                            <option value="classB">Class B</option>
                            <option value="classC">Class C</option>
                        </select>
                    </div>

                    <div className="row">
                        <label for="class">Service Provider:</label><br />
                        <select class="form-select" aria-label="Default select example" value={data.Service_Provider} name='Service_Provider'onChange={handlechange} style={{ fontSize: "20px" }} required>
                            <option selected>Select</option>
                            <option value="SriLankanAirline">SriLankan Airline</option>
                            <option value="AirLanka">Air Lanka</option>

                        </select>
                    </div>
   
                    <div className='row'>
                     <button type="submit" class="btn btn-success form-control mt-2   fw-bold" style={{ fontSize: "20px" }} >Update</button>    
                    </div>
                    <div className="row">
                        <a href="/ticketManagement">  <button type="button" class="btn btn-danger form-control mt-4 bg-danger  fw-bold" style={{ fontSize: "20px" }} >Cancel</button></a>

                    </div>
                  
            </form>

</center>

        </div>

    );

}