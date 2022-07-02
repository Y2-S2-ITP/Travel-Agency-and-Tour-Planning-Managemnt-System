import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function View_Guide_Profile(props) {

    let id = props.match.params.id;

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/guide/${id}`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    //Insert Part
    const Guide_ID = data.Guide_ID;
    const [No_of_Days, setNoOfDays] = useState("");
    const [Tour_place, setTourPlace] = useState("");
    const [Starting_point, setStartingPoint] = useState("");

    let token = window.localStorage.getItem("jwt");
    token = JSON.parse(token);
    let User_Name = token.user.name;

    function GuideReservation(e) {
        e.preventDefault();

        const addGuideRes = {
            No_of_Days, Tour_place, Starting_point, Guide_ID, User_Name
        }

        console.log(addGuideRes);
        axios.post("http://localhost:8000/guidereservation/add", addGuideRes).then(() => {
            alert("Guide Reservation successfully");
        }).catch((err) => {
            alert(err);
        });
    }


    return (
        <div className="container">
            <br /><br /><br />
            <center>
                <h1 className="bg-warning p-2">Guide User Profile</h1>
                <div className="row mt-5 mb-5">
                    <div className="col-lg-6 card-body" style={{ backgroundColor: "lightskyblue"}}>
                        <img src={data.Img} width="50%" className="mt-3" style={{marginTop:"50px",marginBottom:"50px"}}/>
                        <h2 style={{fontSize:"16px"}}>{data.Full_Name}</h2>
                        <h2 style={{fontSize:"16px"}}>Age : {data.Age}</h2>
                        <h2 style={{fontSize:"16px"}}>Email : {data.Email}</h2>
                        <h2 style={{fontSize:"16px"}}>Mobile No : {data.Phone}</h2>
                        <h2 style={{fontSize:"16px"}}>Experience : {data.Experience}</h2>
                    </div>
                    <div className="col-lg-6 text-light" style={{ backgroundColor: "lightslategrey" }}>

                        <div className="col" style={{ fontSize: '20px',marginLeft:"150px"}}>
                            <center>
                                <form onSubmit={GuideReservation}>
                                    <div className="form-group col-lg-8">
                                        <label>Guide</label>
                                        <input type="text" name="name" value={data.Full_Name} id="name" className="form-control" readOnly />
                                    </div>
                                    <div className="form-group col-lg-8">
                                        <label>Guide ID</label>
                                        <input type="text" name="name" value={data.Guide_ID} id="name" className="form-control" readOnly />
                                    </div>
                                    <div className="form-group col-lg-8">
                                        <label>No of Days</label>&nbsp;&nbsp;
                                        <input type="text" name="No_of_Days" id="No_of_Days" className="form-control"
                                            onChange={(e) => {
                                                setNoOfDays(e.target.value);
                                            }
                                            } />
                                    </div>
                                    <div className="form-group col-lg-8">
                                        <label>Tour place</label>&nbsp;&nbsp;
                                        <input type="text" name="Tour_place" id="Tour_place" className="form-control"
                                            onChange={(e) => {
                                                setTourPlace(e.target.value);
                                            }
                                            } />
                                    </div>
                                    <div className="form-group col-lg-8">
                                        <label>Starting Point</label>&nbsp;&nbsp;
                                        <input type="text" name="Starting_point" id="Starting_point" className="form-control"
                                            onChange={(e) => {
                                                setStartingPoint(e.target.value);
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
            </center>

        </div>
    );

}