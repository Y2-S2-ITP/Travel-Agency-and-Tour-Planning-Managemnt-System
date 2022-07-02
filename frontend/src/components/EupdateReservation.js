import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RUEventPage(props) {


    //get id from parameter
    const id = props.match.params.id;

    //set useEffect data
    const [data, setData] = useState("");

    //get data using id
    useEffect(() => {

        axios.put(`http://localhost:8000/reservation/eventticket/update/${id}`).then((res) => {
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


        axios.put(`http://localhost:8000/reservation/eventticket/update/${id}`, data).then(() => {
            alert("Event Reservation Details Sucessfully updated");

        }).catch((err) => {
            alert(err)
        })
        //window.location.href = "/atrain";
    }
    return (
        <div className="container" >
           
    
          <div className="lg-2"></div>
            
          
                   <div className="col-lg-1"></div>
                  
                   <center>
                   <form className="col  text-light  p-5 fw-bold mt-3 mr-5  "style={{ fontSize: "20px",backgroundColor:"lightseagreen" ,width:"30%"}} onSubmit={sendData}>
                   <h3 className="text-dark fw-bold "><center>Event Reservation Update</center></h3>
                     
                    <center>
                    <div className="row-lg-4 mt-3">
                        <label for="class">Event Name:</label><br />
                        <select class="form-select" aria-label="Default select example"style={{ fontSize: "20px" }} value={data.Event_Name} name='Event_Name'onChange={handlechange} required>
                            <option selected>Select</option>
                            <option value="Happy New Year">Happy New Year</option>
                            <option value="Chritmas">chritmas</option>
                            <option value="Holy Festival">holy Festival</option>

                        </select>
                        </div>
                        <div className="row-lg-4 mt-3">
                        <label for="class">Location:</label><br />
                        <select class="form-select" aria-label="Default select example"style={{ fontSize: "20px" }} value={data.Location} name='Location'onChange={handlechange}required>
                            <option selected>Select</option>
                            <option value="Hambanthota">Hambanthota</option>
                            <option value="Matara Fort">Matara Fort </option>
                            <option value="Galle Fort">Galle Fort</option>

                        </select>  
                        </div>
                    
                    <div className="row-lg-4 mt-3">
                    <label for="class">No of Tickets:</label><br />
                        <select class="form-select" aria-label="Default select example"style={{ fontSize: "20px" }}value={data.No_Of_Tickets} name='No_Of_Tickets'onChange={handlechange}required>
                            <option selected>Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>

                        </select>    
                        
                    <div>
                    <div className="row-lg-3 mt-3">
                        <label for="Date">Date:</label><br />
                        <input type='Date'  name='Date' id='date' className='form-control' style={{ fontSize: "20px" }}value={data.Date} onChange={handlechange}required/>



                    </div>
                    <div className="row-lg-12 mt-5">
                        <button type="sumbit" class="btn btn-success form-control fw-bold"style={{ fontSize: "20px" }}>Update</button>
                        
                    </div>
            <div className="mt-4"></div>    
            </div>
           <a href="/ticketManagement"> <button type="button" class="btn btn-danger form-control  mb-1  fw-bold" style={{ fontSize: "20px" }}>Cancel</button></a>
            </div>
            
            </center>
</form>
</center>

</div>
    );
                    }

