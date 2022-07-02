import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CarReservationBody() {


    const [cars, setCars] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8000/car/')
            .then((res) => {
                console.log(res);
                setCars(res.data);
            }).catch((err) => {
                console.log(err.message);
            });
    }, []);

    const [searchTerm, setSearchTerm] = useState("");

    return (

        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-12 p-3 opacity-80 mb-5" style={{backgroundColor:"lightskyblue"}}>
                    <form className="form-group" align="left">
                        <div className="row" >
                            <div className="col-lg-3">
                                {/*
                                <label>Brand</label>
                                <select name="from" id="from" className="form-control">
                                    <option value="Select one">Select one</option>
                                    <option value="TOYOTA">TOYOTA</option>
                                    <option value="BMW">BMW</option>
                                    <option value="AUDI">AUDI</option>
                                    <option value="BENZ">BENZ</option>
                                    <option value="SUZUKI">SUZUKI</option>
                                    <option value="NISSAN">NISSAN</option>
                                    <option value="VOLVO">VOLVO</option>
                                </select>
                            */}
                            </div>

                            <div className="col-lg-3">
                                {/*
                                <label>Location</label>

                                <select name="Location" id="type" className="form-control">
                                    <option value="Select one">Select one</option>
                                    <option value="Colombo">Colombo</option>
                                    <option value="Hambantota">Hambantota</option>
                                    <option value="Matara">Matara</option>
                                    <option value="Galle">Galle</option>
                                    <option value="Kandy">Kandy</option>
                                    <option value="Kataragama">Kataragama</option>
                                </select>
                            */}
                            </div>
                            <div className="col-lg-3"></div>
                            <div className="col-lg-3">
                                <label>SEARCH</label>
                                <input type="text" name="search" id="search" className="form-control" 
                                onChange={(e) =>
                                    setSearchTerm(e.target.value)
                                }/>
                            </div>

                        </div>
                    </form>

                </div>

                <div>
                    {

                        cars.filter(val => {
                            if (val === "") {
                                return val;
                            }
                            else if (
                                val.Brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.Model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.Location.toLowerCase().includes(searchTerm.toLowerCase())
                            ) {
                                return val;
                            }
                        })


                        .map((val, key) => {
                            if (val.Car_Type == "Car") {
                                
                                return (
                    <div className="row m-1 mb-2" style={{ float: "left", listStyle: "none" }}>
                        <div className="col mt-2 mb-2">
                            <ul style={{ flistStyle: "none" }} className="card p-1">
                                <li><img src={val.Img} width="200px" height="150px" className="m-3" /></li>
                                <li><h2>{val.Car_Type}</h2></li>
                                <li>Brand : {val.Brand}</li>
                                <li>Model : {val.Model}</li>
                                <li><a href={`/ground/car/carprofile/${val._id}`} className="btn btn-primary">Book Now</a></li>
                            </ul>
                        </div>
                    </div>
                    )

                            }

                        })
                    }
                </div>

            </div>


        </div>

    );
}