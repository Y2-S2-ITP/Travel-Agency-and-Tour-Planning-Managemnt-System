
import axios from 'axios';
import React,{useEffect, useState} from 'react';

export default function AUTrainPage(props) {
//get id from parameter
const id = props.match.params.id;

//set useEffect data
const [data,setData] = useState("");

//get data using id
useEffect(()=>{

    axios.get(`http://localhost:8000/admin/trainticket/${id}`).then((res)=>{
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


    axios.put(`http://localhost:8000/admin/trainticket/update/${id}`, data).then(() => {
        alert("Train Sucessfully updated");

    }).catch((err) => {
        alert(err)
    })
    //window.location.href = "/abus";
}
    return (

        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-3">

                <form className="text-dark fw-bold mt-5 p-3 "style={{ fontSize: "20px",backgroundColor:"lightskyblue" }}  onSubmit={sendData}>
                    <center> <h3 className="fw-bold">UPDATE INSERT TRAIN</h3></center>
                    
                    <div className="mt-1">
                        <label for="class">From:</label><br />
                        <select class="form-select" aria-label="Default select example" className="form-control"name="From" value={data.From} style={{ fontSize: "20px" }}  onChange={handlechange}>
                            <option selected>Select</option>
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

                    <div className=" mt-1">
                        <label for="class">To:</label><br />
                        <select class="form-select" aria-label="Default select example" className="form-control"name="To" value={data.To} style={{ fontSize: "20px" }}  onChange={handlechange}>
                            <option selected>Select</option>
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

                    <div className=" mt-1">
                        <label for="class">Distance:</label><br />
                        <input type='text'  id='distance' className='form-control'name="Distance" value={data.Distance} style={{ fontSize: "20px" }}  onChange={handlechange} />

                    </div>

                    <div className=" mt-1">
                        <label for="class">Ticket Fee:</label><br />
                        <input type='text'  id='price' className='form-control' name="Ticket_Fee" value={data.Ticket_Fee} style={{ fontSize: "20px" }}  onChange={handlechange}/>

                    </div>

                    <div className=" mt-1">
                        <label for="class">Begging Time:</label><br />
                        <input type='time'  id='btime' className='form-control' name="Begging_Time" value={data.Begging_Time} style={{ fontSize: "20px" }}  onChange={handlechange} />

                    </div>

                    <div className=" mt-1">
                        <label for="class">Arrival Time:</label><br />
                        <input type='Time' id='atime' className='form-control' name="Arrival_Time" value={data.Arrival_Time} style={{ fontSize: "20px" }}  onChange={handlechange} />

                    </div>

                    <div className=" mt-1">
                        <label for="Date">Date:</label><br />
                        <input type='Date'  id='atime' className='form-control' name="Date" value={data.Date} style={{ fontSize: "20px" }}  onChange={handlechange} />



                    </div>
                    <div className="mt-2">
                      <a href="/atrain">  <button type="submit" class="btn btn-success form-control fw-bold"style={{ fontSize: "20px" }}  >Update now</button></a>

                    </div>
                    <div className="mt-2">
                   <a href="/tickets">     <button type="button" class="btn btn-danger form-control mt-2  fw-bold" style={{ fontSize: "20px" }} >Cancel</button></a>

                    </div>

                </form>

            </div>


            

            </div>

        

    );

}
