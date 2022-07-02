import React, { useState, useEffect } from "react";
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function AddNewCarAndAirportTaxi() {

    const [Car_ID, setId] = useState("");
    const [Car_Type, setCarType] = useState("");
    const [Brand, setBrand] = useState("");
    const [Model, setModel] = useState("");
    const [Location, setLocation] = useState("");
    const [Cost_per_KM, setCostPerKm] = useState("");
    const [Img,setImg] = useState("");

    function dataSend(e) {
        e.preventDefault();
        const newBooking = {
            Car_ID, Car_Type, Brand, Model, Location, Cost_per_KM,Img
        }

        axios.post("http://localhost:8000/car/add",newBooking).then(() => {
            alert("New Car Added");
        }).catch((err) => {
            alert(err);
        })
        window.location.reload();
    }

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


    function deleteCar(id) {
        axios.delete(`http://localhost:8000/car/delete/${id}`)
            .then(() => {
                alert("Deleted Successfully");
            }).catch((err) => {
                alert("error : " + err);
            });
            window.location.reload();
    }

    return (

        <div className="container">
            <div className="row">

                <div className="bg-dark p-5 mt-4 text-light">
                    <h1 className="p-2 mt-1 bg-info">
                        Add New Car and Airport Taxi
                    </h1>
                    <div className="row">
                        <form className="mt-4" onSubmit={dataSend}>
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-4">

                                    <div className="form-group">
                                        <label>ID</label>
                                        <input type="text" id="id" name="id" className="form-control" required
                                            onChange={(e) => {
                                                setId(e.target.value);
                                            }
                                            }/>
                                    </div>
                                    <div className="form-group">
                                        <label>CAR TYPE</label>
                                        <select name="cartype" id="cartype" className="form-control" required
                                            onChange={(e) => {
                                                setCarType(e.target.value);
                                            }
                                            }>
                                            <option value="Selecrt one" >Select one</option>
                                            <option value="Car">Car</option>
                                            <option value="Airport Taxi">Airport Taxi</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>BRAND</label>
                                        <select name="brand" id="brand" className="form-control" required
                                            onChange={(e) => {
                                                setBrand(e.target.value);
                                            }
                                            }>
                                            <option value="">Select one</option>
                                            <option value="Toyota">Toyota</option>
                                            <option value="BMW">BMW</option>
                                            <option value="AUDI">AUDI</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>MODEL</label>
                                        <input type="text" name="model" id="model" className="form-control" required
                                            onChange={(e) => {
                                                setModel(e.target.value);
                                            }
                                            } />
                                    </div>
                                    <div className="form-group">
                                        <label>LOCATION</label>
                                        <select name="location" id="location" defaultValue className="form-control" required
                                            onChange={(e) => {
                                                setLocation(e.target.value);
                                            }
                                            }>
                                            <option value="" >Select one</option>
                                            <option value="Colombo 07">Colombo 07</option>
                                            <option value="Matara">Matara</option>
                                            <option value="Hambantota">Hambantota</option>
                                            <option value="Galle">Galle</option>
                                            <option value="Kandy">Matara</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>COST PER KM</label>
                                        <input type="text" name="costperkm" id="costperkm" className="form-control" required
                                            onChange={(e) => {
                                                setCostPerKm(e.target.value);
                                            }
                                            } />
                                    </div>
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input type="text" name="Img" id="Img" className="form-control" required
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
            <div className="row mt-4" style={{overflowY:"100x",overflow:"auto",height:"200px"}}>

                <table className="table table-hover table-bordered table-striped">

                    <thead className="thead text-light bg-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">CAR TYPE</th>
                            <th scope="col">BRAND</th>
                            <th scope="col">MODEL</th>
                            <th scope="col">LOCATION</th>
                            <th scope="col">COST (KM)</th>
                            <th scope="col">UPDATE</th>
                            <th scope="col">DELETE</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                    {cars.map((val, key) => {
                        return (
                    
                            <tr className="bg-light table-hover">
                                <td>{val.Car_ID}</td>
                                <td>{val.Car_Type}</td>
                                <td>{val.Brand}</td>
                                <td>{val.Model}</td>
                                <td>{val.Location}</td>
                                <td>{val.Cost_per_KM}</td>
                                <td><a className="btn btn-success text-dark" href={`/admin/ground/car/update/${val._id}`}>Update</a></td>
                                <td><button className="btn btn-danger text-dark" onClick={() => deleteCar(val._id)}>Delete</button></td>
                            </tr>
        
                        )
                    })}
                     </tbody>
                </table>

            </div>

        </div >
    );

}