import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewCarProfile(props) {

    let id = props.match.params.id;

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/car/${id}`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    let token = window.localStorage.getItem("jwt");
    token = JSON.parse(token);
    let User_Name = token.user.name;

    //Insert Part
    const Car_ID = data.Car_ID;
    const [Date, setDate] = useState("");
    const [Time, setTime] = useState("");
    const [From, setFrom] = useState("");
    const [To, setTo] = useState("");
    const Car_Type = data.Car_Type;

    function CarReservation(e) {
        e.preventDefault();

        const addCarRes = {
            Date, Time, From, To, Car_Type, Car_ID,User_Name
        }

        console.log(addCarRes);
        axios.post("http://localhost:8000/carreservation/add", addCarRes).then(() => {
            alert("Car Reservation successfully");
        }).catch((err) => {
            alert(err);
        });
    }


    return (

        <div className="container">
                <h1 className="bg-warning p-2 mt-1" style={{ backgroundColor: "lightskyblue" }}>Car Profile</h1>
            <div className="row mt-4 mb-5">
                <div className="col-lg-6 card-body" style={{ backgroundColor: "lightskyblue"}}>
                    <center>
                    <img src={data.Img} width="70%" className="mt-3" style={{marginTop:"100px",marginBottom:"50px"}}/>
                    <h2 style={{fontWeight:"bold"}}>{data.Brand}</h2>
                    <h2 style={{fontWeight:"bold"}}>Model : {data.Model}</h2>
                    <h2 style={{fontWeight:"bold"}}>Car ID : {data.Car_ID}</h2>
                    <h2 style={{fontWeight:"bold"}}>Location : {data.Location}</h2>
                    <h2 style={{fontWeight:"bold"}}>Cost Per KM : {data.Cost_per_KM}</h2>
                    </center>
                </div>
                <div className="col-lg-6 text-dark" style={{backgroundColor: "lightslategrey"}}>

                    <div className="col" style={{ fontSize: '20px'}}>
                        <center>
                            <form onSubmit={CarReservation} style={{marginLeft:"150px"}}>
                                <div className="form-group col-lg-8">
                                    <label>Car ID</label>
                                    <input type="text" name="Car_ID" value={data.Car_ID} id="Car_ID" className="form-control" readOnly />
                                </div>
                                <div className="form-group col-lg-8">
                                    <label>Type</label>&nbsp;&nbsp;
                                    <input type="text" name="Type" id="Starting_point" value={data.Car_Type} className="form-control" readOnly />
                                </div>
                                <div className="form-group col-lg-8">
                                    <label>Date</label>&nbsp;&nbsp;
                                    <input type="date" name="Date" id="Date" className="form-control"
                                        onChange={
                                            (e) => {
                                                setDate(e.target.value);
                                            }
                                        }
                                    />
                                </div>
                                <div className="form-group col-lg-8">
                                    <label>Time</label>&nbsp;&nbsp;
                                    <input type="time" name="Time" id="Time" className="form-control"
                                        onChange={
                                            (e) => {
                                                setTime(e.target.value);
                                            }
                                        } />
                                </div>
                                <div className="form-group col-lg-8">
                                    <label>From</label>&nbsp;&nbsp;
                                    <input type="text" name="From" id="From" className="form-control"
                                        onChange={
                                            (e) => {
                                                setFrom(e.target.value);
                                            }
                                        } />
                                </div>
                                <div className="form-group col-lg-8">
                                    <label>To</label>&nbsp;&nbsp;
                                    <input type="text" name="To" id="To" className="form-control"
                                        onChange={
                                            (e) => {
                                                setTo(e.target.value);
                                            }
                                        } />
                                </div>
                                <div className="form-group col-lg-8 mt-3">
                                    <input type="submit" name="submit" id="submit" value="Book Now" className="form-control btn btn-primary" />
                                </div>
                                <div className="form-group col-lg-8 mt-3">
                                    <input type="button" name="canncel" id="cancel" value="Cancel" className="form-control btn btn-danger" />
                                </div>


                            </form>
                        </center>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>

        </div>
    )
}