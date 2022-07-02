import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function AddNewGuideBodyForm() {

    const [Guide_ID, setGuideID] = useState("");
    const [Full_Name, setFullName] = useState("");
    const [Age, setAge] = useState("");
    const [Address, setAddress] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Experience, setExperience] = useState("");
    const [Fee, setFee] = useState("");
    const [Img, setImg] = useState("");

    function addNewGuiide(e) {
        e.preventDefault();

        const addGuide = {
            Guide_ID, Full_Name, Age, Address, Email, Phone, Experience, Fee,Img
        }

        axios.post("http://localhost:8000/guide/add", addGuide).then(() => {
            alert("Guide added successfully");
        }).catch((err) => {
            alert(err);
        });
        window.location.reload();
    }

    const [Guides, setGuides] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/guide/").then((res) => {
            setGuides(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);


    function deleteGuide(id){

        axios.delete(`http://localhost:8000/guide/delete/${id}`).then(()=>{
            alert("Guide deleted Successfully");
        }).catch((err)=>{
            alert(err);
        })
        window.location.reload();
    }

    return (
        <div className="container">

            <div className="row">

                <div className="p-4 mt-2 text-light bg-dark">
                    <h1 className="p-2 bg-info">
                        Add New Guide
                    </h1>
                    <div className="row">
                        <form className="mt-2" onSubmit={addNewGuiide}>
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-4">

                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" id="fullname" name="fullname" className="form-control" required
                                            onChange={(e) => {
                                                setFullName(e.target.value);
                                            }
                                            } />
                                    </div>
                                    <div className="form-group">
                                        <label>Age</label>
                                        <input type="text" name="age" id="age" className="form-control" required
                                            onChange={(e) => {
                                                setAge(e.target.value);
                                            }
                                            } />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" name="address" id="address" className="form-control" required
                                            onChange={(e) => {
                                                setAddress(e.target.value);
                                            }
                                            } />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" id="email" className="form-control" required
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }
                                            } />
                                    </div>
                                    <div className="form-group">
                                        <label>Fee</label>
                                        <input type="text" name="fee" id="fee" className="form-control" required
                                            onChange={(e) => {
                                                setFee(e.target.value);
                                            }
                                            } />
                                    </div>
                                    <div className="form-group">
                                        <label>Guide ID</label>
                                        <input type="text" name="guideid" id="guideid" className="form-control" required
                                            onChange={(e) => {
                                                setGuideID(e.target.value);
                                            }
                                            } />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>Experience</label>
                                        <select name="experience" id="experience" className="form-control" required
                                            onChange={(e) => {
                                                setExperience(e.target.value);
                                            }
                                            }>
                                            <option value="" >Select one</option>
                                            <option value="Beginner">Beginner</option>
                                            <option value="Expert">Expert</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile Number</label>
                                        <input type="tel" name="mobile" id="mobile" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" className="form-control"
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                            }
                                            } />
                                    </div>
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input type="text" name="Img" id="Img" className="form-control"
                                            onChange={(e) => {
                                                setImg(e.target.value);
                                            }
                                            } />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="insert" value="Insert" className="btn btn-success mt-4 form-control" />
                                        <input type="button" name="clear" value="Clear" className="btn btn-danger mt-4 form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>
                        </form>

                    </div>


                </div>

            </div>
            <div className="row mt-4" style={{ overflowY: "100x", overflow: "auto", height: "200px" }}>

                <table className="table">

                    <thead className="thead text-light bg-dark">
                        <tr>
                            <th scope="col">GUIDE ID</th>
                            <th scope="col">FULL NAME</th>
                            <th scope="col">AGE</th>
                            <th scope="col">ADDRESS</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">MOBILE NO</th>
                            <th scope="col">EXPERIENCE</th>
                            <th scope="col">FEE</th>
                            <th scope="col">UPDATE</th>
                            <th scope="col">DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Guides.map((val, key) => {
                                return (
                                    <tr className="bg-light">
                                        <td>{val.Guide_ID}</td>
                                        <td>{val.Full_Name}</td>
                                        <td>{val.Age}</td>
                                        <td>{val.Address}</td>
                                        <td>{val.Email}</td>
                                        <td>{val.Phone}</td>
                                        <td>{val.Experience}</td>
                                        <td>{val.Fee}</td>
                                        <td><a href={`/admin/ground/guide/update/${val._id}`} className="btn btn-success">Update</a></td>
                                        <td><button className="btn btn-danger" onClick={()=>deleteGuide(val._id)}>Delete</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
}