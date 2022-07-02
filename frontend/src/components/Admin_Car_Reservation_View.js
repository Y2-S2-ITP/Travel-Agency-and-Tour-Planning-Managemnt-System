import react, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddminCarReservationView() {

    const [carRes, setCarRes] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8000/carreservation/')
            .then((res) => {
                console.log(res);
                setCarRes(res.data);
            }).catch((err) => {
                console.log(err.message);
            });
    }, []);


    function deleteCar(id) {
        axios.delete(`http://localhost:8000/carreservation/delete/${id}`)
            .then(() => {
                alert("Deleted Successfully");
            }).catch((err) => {
                alert("error : " + err);
            });
        window.location.reload();
    }

    return (
        <div className="container">

            <div className="mt-3">
                <h1 className="bg-dark text-light p-2">Car Reservations</h1>
            </div>

            <table className="table table-bordered mt-3" style={{overflowY:"100x",overflow:"auto",height:"200px"}}>
                <thead className="bg-light">
                    <tr>
                        <td>Date</td>
                        <td>Time</td>
                        <td>From</td>
                        <td>To</td>
                        <td>Type</td>
                        <td>Car ID</td>
                        <td>User</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {carRes.map((val, key) => {
                        return (
                            <tr className="bg-light">
                                <td>{val.Date}</td>
                                <td>{val.Time}</td>
                                <td>{val.From}</td>
                                <td>{val.To}</td>
                                <td>{val.Car_Type}</td>
                                <td>{val.Car_ID}</td>
                                <td>{val.User_Name}</td>
                                <td><a href={`/admin/ground/carreservation/update/${val._id}`} className="btn btn-success">Update</a></td>
                                <td><input type="button" name="delete" value="Delete" className="btn btn-danger" onClick={() => deleteCar(val._id)}/></td>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>

        </div>
    )

}