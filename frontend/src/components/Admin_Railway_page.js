
import React, { useState,useEffect } from 'react';
import axios from 'axios';

export default function ATrainPage() {
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

        const newTrain = {
            Ticket_Type, From, To, Distance, Begging_Time, Arrival_Time, Date, Ticket_Fee
        }

        axios.post("http://localhost:8000/admin/trainticket/add", newTrain).then(() => {
            alert("Train Sucessfully added");

        }).catch((err) => {
            alert(err)
        })
    }

    const [AdminTrainData,setAdminTrainData] =useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/admin/trainticket/").then((res)=>{
            setAdminTrainData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    function deleteTrain(id){
        axios.delete(`http://localhost:8000/admin/trainticket/delete/${id}`).then(()=>{
            alert("Successfully deleted");
        }).catch((err)=>{
            alert(err);
        })
    }

    //search part
    const [searchTerm, setSearchTerm] = useState("");

    return (
        
        <div className="row">
          
            <div className="col-lg-3">

                <form onSubmit={sendData} className=" text-dark fw-bold mt-5 p-3 "style={{ fontSize: "20px",backgroundColor:"lightskyblue" }}>
                    <center> <h3 className="fw-bold">INSERT TRAIN</h3></center>

                    <div className="mt-1">
                        <label for="class">Ticket Type:</label><br />
                        <input type='text' name='Ticket_Type' id='type' className='form-control'style={{ fontSize: "20px" }}required onChange={
                            (e) => {
                                setTicketType(e.target.value);
                            }
                        } />


                    </div>
                    <div className="mt-1">
                        <label for="class">From:</label><br />
                        <select class="form-select" aria-label="Default select example" className="form-control" name="From"style={{ fontSize: "20px" }}required onChange={
                            (e) => {
                                setFrom(e.target.value);
                            }
                        }>
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
                        <select class="form-select" aria-label="Default select example" className="form-control" name="To"style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setTo(e.target.value);
                            }
                        }>
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
                        <input type='text' name='distance' id='distance' className='form-control' name="Distance" style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setDistance(e.target.value);
                            }
                        } />

                    </div>

                    <div className=" mt-1">
                        <label for="class">Ticket Fee:</label><br />
                        <input type='text' name='price' id='price' className='form-control' name="Ticket_Fee"style={{ fontSize: "20px" }} required onChange={
                            (e) => {
                                setTicketFee(e.target.value);
                            }
                        } />
                     
                    </div>

                    <div className=" mt-1">
                        <label for="class">Begging Time:</label><br />
                        <input type='Time' name='btime' id='btime' className='form-control' name="Begging_Time"style={{ fontSize: "20px" }}  onChange={
                            (e) => {
                                setBeggingTime(e.target.value);
                            }
                        } />

                    </div>

                    <div className=" mt-1">
                        <label for="class">Arrival Time:</label><br />
                        <input type='Time' name='atime' id='atime' className='form-control' name="Arrival_Time"style={{ fontSize: "20px" }}  onChange={
                            (e) => {
                                setArrivalTime(e.target.value);
                            }
                        } />

                    </div>

                    <div className=" mt-1">
                        <label for="Date">Date:</label><br />
                        <input type='Date' name='date' id='date' className='form-control' name="Date" style={{ fontSize: "20px" }} onChange={
                            (e) => {
                                setDate(e.target.value);
                            }
                        } />



                    </div>
                    <div className="mt-2">
                        <button type="submit" class="btn btn-success form-control fw-bold"style={{ fontSize: "20px" }}  >Add now</button>

                    </div>
                    <div className="mt-2">
                        <button type="button" class="btn btn-danger form-control mt-2  fw-bold" style={{ fontSize: "20px" }}>Cancel</button>

                    </div>

                </form>

            </div>


            <div className="col-lg-9 " style={{ height: "700px", overflowY: "scroll", overflow: "auto" }}>

            <div className="col-lg-4  p-2 mt-2 mb-2">
                        <input type="search" placeholder="search" name="search" className="form-control" style={{fontSize:"20px",marginTop:"50px"}} 
                        onChange={(e)=>{
                           setSearchTerm(e.target.value)
                        }}/>
                    </div>

                <h3 className="text-dark fw-bold mt-3" style={{marginLeft:"425px"}}> Insert Train Details</h3>
                <table className="table table-striped table-bordered fw-bold table-hover "style={{ fontSize: "20px" }}>
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
                            AdminTrainData.filter(val=>{
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
                            
                             .map((val,key)=>{
                              return(
                                <tr className="bg-light  text-dark">
                                    <td>{val.From}</td>
                                    <td>{val.To}</td>
                                    <td>{val.Distance}</td>
                                    <td>{val.Ticket_Fee}</td>
                                    <td>{val.Begging_Time}</td>
                                    <td>{val.Arrival_Time}</td>
                                    <td>{val.Date}</td>
                                    <td><a  className="btn btn-success" style={{ fontSize: "20px" }} href={`/autrain/${val._id}`}>update</a></td>
                                    <td><input type="button" value="Delete" className="btn btn-danger" style={{ fontSize: "20px" }}onClick={()=> deleteTrain(val._id)}/></td>
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
