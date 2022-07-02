
import axios from 'axios';
import React,{useEffect, useState} from 'react';



export default function AUBusPage(props) {

    //get id from parameter
    const id = props.match.params.id;

    //set useEffect data
    const [data,setData] = useState("");

    //get data using id
    useEffect(()=>{

        axios.get(`http://localhost:8000/admin/busticket/${id}`).then((res)=>{
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


        axios.put(`http://localhost:8000/admin/busticket/update/${id}`, data).then(() => {
            alert("Bus Sucessfully updated");

        }).catch((err) => {
            alert(err)
        })
        //window.location.href = "/abus";
    }



    return (
        
        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-3">

                <form className=" text-dark fw-bold mt-5 p-3" style={{ fontSize: "20px",backgroundColor:"lightskyblue" }}onSubmit={sendData}>
                    <center> <h3 className="fw-bold">UPDATE INSERT BUS</h3></center>
                    
                    <div className="mt-1">
                        <label for="class">From:</label><br />
                        <select class="form-select" value={data.From} name='From' aria-label="Default select example" className="form-control" style={{ fontSize: "20px" }} onChange={handlechange} >
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
                            <option value="4">Avissawella</option>
                        </select>
                    </div>

                    <div className=" mt-1">
                        <label for="class">To:</label><br />
                        <select class="form-select" value={data.To} name='To' aria-label="Default select example"  onChange={handlechange}style={{ fontSize: "20px" }} className="form-control">
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
                            <option value="4">Avissawella</option>


                        </select>
                    </div>

                    <div className=" mt-1">
                        <label for="class">Distance:</label><br />

                        <input type='text' value={data.Distance} name='Distance' id='distance' className='form-control'style={{ fontSize: "20px" }} onChange={handlechange} />


                    </div>

                    <div className=" mt-1">
                        <label for="class">Ticket Fee:</label><br />
                        <input type='text' value={data.Ticket_Fee} name='Ticket_Fee' id='price' className='form-control' style={{ fontSize: "20px" }}onChange={handlechange} />

                    </div>

                    <div className=" mt-1">
                        <label for="class">Begging Time:</label><br />
                        <input type='Time' value={data.Begging_Time} name='Begging_Time' id='btime' className='form-control'style={{ fontSize: "20px" }} onChange={handlechange}/>

                    </div>

                    <div className=" mt-1">
                        <label for="class">Arrival Time:</label><br />
                        <input type='Time' value={data.Arrival_Time} name='Arrival_Time' id='atime' className='form-control' style={{ fontSize: "20px" }}onChange={handlechange}/>

                    </div>

                    <div className=" mt-1">
                        <label for="Date">Date:</label><br />
                        <input type='Date' value={data.Date} name='Date' id='atime' className='form-control'  style={{ fontSize: "20px" }}onChange={handlechange}/>



                    </div>
                    <div className="mt-2">
                        <a href="/abus">  <button type="submit" class="btn btn-success form-control  fw-bold"style={{ fontSize: "20px" }} >Update now</button></a>

                    </div>
                    <div className="mt-2">
                    <a href="/abus"><button type="button" class="btn btn-danger form-control mt-2   fw-bold"style={{ fontSize: "20px" }} >Cancel</button></a>

                    </div>

                </form>

            </div>



        </div>



    );

}
