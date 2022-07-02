import React, { useState, useEffect } from 'react';
import "../style/adminViewPackage.css";
import axios from "axios";
import SearchIcon from '@material-ui/icons/Search';

function AdminViewPackage() {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        function getPackage() {
            axios.get("http://localhost:8000/tourPackage/ViewPackage").then((res) => {
                console.log(res);
                setPackages(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPackage();
    }, [])

    return (
        <div>
            <div class="container">
                <div style={{marginLeft:150}} class="row col-md-11 col-md-offset-2 custyle tablediv">
                   
                    <table class="table table-striped custab column">
                        <thead>

                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th># Of Days</th>
                                <th>Meal-Plan</th>
                                <th>Transportation</th>
                                <th>Activity</th>
                                <th>Location</th>
                                <th>Price (Adult)</th>
                                <th>Price (Child)</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                packages.map(post => (
                                    <tr>
                                        <td>{post.packageID}</td>
                                        <td>{post.packageName}</td>
                                        <td>{post.PackageType}</td>
                                        <td>{post.NoOfDays}</td>
                                        <td>{post.MealPlan}</td>
                                        <td>{post.Transpotation}</td>
                                        <td>{post.Activities}</td>
                                        <td>{post.LocationList}</td>
                                        <td>{post.PriceForAdult}</td>
                                        <td>{post.PriceForChild}</td>
                                        <td class="text-center"><a class='btn btn-info btn-xs' href={`/admin/editPackage/${post._id}`}>
                                            <span class="glyphicon glyphicon-edit"></span> Edit</a>
                                            <a href={`/admin/deletePackage/${post._id}`} class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
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

export default AdminViewPackage
