import React, { useState, useEffect } from 'react'
import "../style/adminReservations.css";
import generatePDF from './generatePDF';
import axios from 'axios';

function AdminReservations() {

    const [packagesReservations, setPackagesReservations] = useState([]);


    useEffect(() => {
        function getPackage() {
            axios.get("http://localhost:8000/tourPackageReservation/viewReservations").then((res) => {
                console.log(res);
                setPackagesReservations(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPackage();
    }, []);

    const reportReservation = packagesReservations;


    return (
        <div>
            <h1>Tour Reservations</h1>
            <div className="container mb-4 mt-4 p-3">
                <div className="row">

                    <button
                        className="btn btn-primary pdfButton"
                        onClick={() => generatePDF(reportReservation)}
                    >
                        Generate Report
                    </button>

                </div>
            </div>

        

            <div class="container">
                <div style={{marginLeft:150}} class="row col-md-11 col-md-offset-2 custyle tablediv">
                    <table class="table table-striped custab column reservaTable">
                        <thead>

                            <tr>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>PackageID</th>
                                <th>packageStatus</th>
                                <th>dueDate</th>
                                <th>reservationDate</th>
                                <th>noOfAdults</th>
                                <th>noOfChilds</th>
                                <th>paidAmount</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                packagesReservations.map(post => (
                                    <tr>
                                        <td>{post.userName}</td>
                                        <td>{post.userEmail}</td>
                                        <td>{post.PackageID}</td>
                                        <td>{post.packageStatus}</td>
                                        <td>{post.dueDate}</td>
                                        <td>{post.reservationDate}</td>
                                        <td>{post.noOfAdults}</td>
                                        <td>{post.noOfChilds}</td>
                                        <td>{post.paidAmount}</td>
                                        <td class="text-center"><a class='btn btn-info btn-xs' href={`/admin/EditPackageReservation/${post._id}`}>
                                            <span class="glyphicon glyphicon-edit"></span> Edit</a>
                                            <a href={`/admin/DeletePackageReservation/${post._id}`} class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminReservations
