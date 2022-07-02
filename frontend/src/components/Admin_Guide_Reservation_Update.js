import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminGuideReservationUpdate(props) {

    let id = props.match.params.id;

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/guidereservation/${id}`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    function updateGuideReservation(event) {
        event.preventDefault();
        axios.put(`http://localhost:8000/guidereservation/update/${id}`, data).then(() => {
            alert("update Successfully");
        }).catch((err) => {
            console.log(err);
        })
        window.location.href = "/admin/ground/guidereservation";
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }




    return (
        <div className="container">
            <center>
                <h2 className="mt-5">Guide Reservation Update</h2>
            <form onSubmit={updateGuideReservation} className="col-lg-4 mt-3 p-2 bg-dark text-light">
                <div className="form-group">
                    <label>Guide ID</label>
                    <input type="text" name="Guide_ID" value={data.Guide_ID} id="name" className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>No of Days</label>&nbsp;&nbsp;
                    <input type="text" name="No_of_Days" id="No_of_Days" value={data.No_of_Days} className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Tour place</label>&nbsp;&nbsp;
                    <input type="text" name="Tour_place" id="Tour_place" value={data.Tour_place} className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Starting Point</label>&nbsp;&nbsp;
                    <input type="text" name="Starting_point" id="Starting_point" value={data.Starting_point} className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group mt-3">
                    <input type="submit" name="Update" id="Update" value="Update" className="form-control btn btn-primary" />
                </div>
                <div className="form-group mt-3">
                    <input type="button" name="cancel" id="cancel" value="Cancel" className="form-control btn btn-danger" />
                </div>


            </form>
        </center>
        </div>
    )
}