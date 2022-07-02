import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function GuideReservationBody() {

    const [Guides, setGuides] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/guide/").then((res) => {
            setGuides(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="container">
            <div className="row p-5"></div>
            <div>
                <h1 className="p-3" style={{backgroundColor:"lightskyblue"}}>SELECT AND BOOK YOUR TRAVEL GUIDE</h1>
            </div>
            <div>
                <div className="row mt-5">
                    <div className="col-lg-12 p-2 opacity-90 mb-3" style={{backgroundColor:"lightskyblue"}}>
                        <form className="form-group" align="left">
                            <div className="row">

                                <div className="col-lg-4">
                                    <label>SEARCH</label>
                                    <input type="text" name="search" id="search" className="form-control"
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        } />
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                {
                    Guides.filter(val => {
                        if (val === "") {
                            return val;
                        }
                        else if (
                            val.Full_Name.toLowerCase().includes(searchTerm.toLowerCase())||
                            val.Experience.toLowerCase().includes(searchTerm.toLowerCase())
                        ) {
                            return val;
                        }
                    })

                        .map((val, key) => {
                            return (

                                <div className="row m-1 mb-4" style={{ float: "left", listStyle: "none" }}>
                                    &nbsp;
                                    <div className="col mt-3 mb-2">
                                        <ul style={{ listStyle: "none" }} className="card p-1">
                                            <li><img src={val.Img} width="200px" height="150px" className="m-3" /></li>
                                            <li>{val.Full_Name}</li>
                                            <li>{val.Experience}</li>
                                            <li>{val.Email}</li>
                                            <li><a href={`/ground/guide/guideprofile/${val._id}`} className="btn btn-primary">Book Now</a></li>
                                        </ul>
                                    </div>
                                </div>

                            );
                        })
                }
            </div>
        </div >
    );

}