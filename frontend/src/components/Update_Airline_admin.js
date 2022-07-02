
import axios from 'axios';
import React,{useEffect, useState} from 'react';



export default function AUAirlinePage(props) {

//get id from parameter
const id = props.match.params.id;

//set useEffect data
const [data,setData] = useState("");

//get data using id
useEffect(()=>{

    axios.get(`http://localhost:8000/admin/airticket/${id}`).then((res)=>{
        console.log(res.data);
        setData(res.data);
    }).catch((err)=>{
        console.log(err);
    })

},[])


//get input field data
const handlechange = (e) =>{
   
    const {name,value} = e.target;
    setData({...data,[name]:value});

}

// update data  
function sendData(e) {
    e.preventDefault();
    const id = props.match.params.id;


    axios.put(`http://localhost:8000/admin/airticket/update/${id}`, data).then(() => {
        alert("Airline Sucessfully updated");

    }).catch((err) => {
        alert(err)
    })
    //window.location.href = "/abus";
}

return (

        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-3">

                <form className=" text-dark fw-bold mt-4 p-3 "style={{ fontSize: "20px",backgroundColor:"lightskyblue" }} onSubmit={sendData}>
                    <center> <h3 className="fw-bold">UPDATE INSERT PLANE</h3></center>
                    
                    <div className="mt-1">
                        <label for="class">From:</label><br />
                        <select class="form-select" aria-label="Default select example" className="form-control" name="From" value={data.From} style={{ fontSize: "20px" }}  onChange={handlechange}>
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
                        <select class="form-select" aria-label="Default select example" className="form-control" name="To" value={data.To}  style={{ fontSize: "20px" }}  onChange={handlechange}>
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
                        <label for="class">Flight Number:</label><br />
                        <input type='text'  name='Flight_Number' id='fnumber' className='form-control' name="Flight_Number" value={data.Flight_Number}  style={{ fontSize: "20px" }}  onChange={handlechange} />

                    </div>
                    <div className="col">
                        <label for="class">Service Provider:</label><br />
                        <select class="form-select" aria-label="Default select example" className='form-control' name="Service_Provider" value={data.Service_Provider}  style={{ fontSize: "20px" }}  onChange={handlechange}>
                            <option selected>Select</option>
                            <option value="SriLankanAirline">SriLankan Airline</option>
                            <option value="AirLanka">Air Lanka</option>

                        </select>
                        </div>
                    <div className=" mt-1">
                        <label for="class">Departure Time</label><br />
                        <input type='Time' name='Departure_Time' id='Dtime' className='form-control'style={{ fontSize: "20px" }} name="Departure_Time" value={data.Departure_Time}  onChange={handlechange}/>

                    </div>

                    <div className=" mt-1">
                        <label for="class">Arrival Time:</label><br />
                        <input type='Time' name='Arrival_Time' id='Atime' className='form-control' name="Arrival_Time" value={data.Arrival_Time} style={{ fontSize: "20px" }} onChange={handlechange}/>

                    </div>



                    <div className=" mt-1">
                        <label for="Date">Date:</label><br />
                        <input type='Date' name='Atime' id='Atime' className='form-control' style={{ fontSize: "20px" }} name="Date" value={data.Date}  onChange={handlechange} />



                    </div>
                    <div className=" mt-1">
                        <label for="class">No Of Seats:</label><br />
                        <input type='text'  name='No_Of_Seats' id='seat' className='form-control'  style={{ fontSize: "20px" }} name="No_Of_Seats"  value={data.No_Of_Seats} onChange={handlechange}/>

                    </div>
                    <div className=" mt-1">
                        <label for="class">Ticket Fee:</label><br />
                        <input type='text'  name='Ticket_Fee' id='price' className='form-control' style={{ fontSize: "20px" }} name="Ticket_Fee" value={data.Ticket_Fee} onChange={handlechange}/>

                    </div>

                    <div className="mt-2">
                        <a href="/aairline" ><button type="submit" class="btn btn-success form-control fw-bold"style={{ fontSize: "20px" }} >Update now</button></a>

                    </div>
                    <div className="mt-2">
                        <button type="button" class="btn btn-danger form-control mt-2  fw-bold" style={{ fontSize: "20px" }} >Cancel</button>

                    </div>

                </form>

            </div>



        </div>

    );

}
