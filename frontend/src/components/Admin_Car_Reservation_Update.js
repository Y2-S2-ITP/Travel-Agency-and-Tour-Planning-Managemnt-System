import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminCarReservationUpdate(props) {

    let id = props.match.params.id;

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/carreservation/${id}`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    function updateCarReservation(event) {
        event.preventDefault();
        axios.put(`http://localhost:8000/carreservation/update/${id}`, data).then(() => {
            alert("update Successfully");

        }).catch((err) => {
            console.log(err);
        })
        window.location.href = "/admin/ground/carreservation";
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }


    return (
        <div className="container">
            <center>
                <h2 className="text-dark mt-5">Car Reservation Update </h2>
                <form onSubmit={updateCarReservation} className="col-lg-4 bg-dark text-light p-2">
                    <div className="form-group">
                        <label>Car ID</label>
                        <input type="text" name="Car_ID" id="Car_ID" value={data.Car_ID} className="form-control" readOnly onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Type</label>&nbsp;&nbsp;
                        <input type="text" name="Car_Type" id="Car_Type" value={data.Car_Type} className="form-control" readOnly onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Date</label>&nbsp;&nbsp;
                        <input type="date" name="Date" id="Date" value={data.Date} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Time</label>&nbsp;&nbsp;
                        <input type="time" name="Time" id="Time" value={data.Time} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>From</label>&nbsp;&nbsp;
                        <input type="text" name="From" id="From" value={data.From} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>To</label>&nbsp;&nbsp;
                        <input type="text" name="To" id="To" value={data.To} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group mt-3">
                        <input type="submit" name="submit" id="submit" value="Book Now" className="form-control btn btn-primary" />
                    </div>
                    <div className="form-group mt-3">
                        <input type="button" name="canncel" id="cancel" value="Cancel" className="form-control btn btn-danger" />
                    </div>


                </form>
            </center>
        </div>


    )

}