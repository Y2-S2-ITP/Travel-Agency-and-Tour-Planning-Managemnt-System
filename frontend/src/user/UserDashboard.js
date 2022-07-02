import React from "react";
import Layout from '../components/Layout';
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";


const Dashboard = () => {


    const { user: { _id, name, zip, address, country, number, email, date, role } } = isAuthenticated()

    const userLinks = () => {
        return (
            <div>
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" style={{fontSize:"16px"}} to={`/profile/${_id}`}>EDIT PROFILE</Link>
                    </li>


                </ul>
            </div>
        )
    }


    const userInfo = () => {
        return (
            <div className=" mb-5" style={{width:'60%'}}>
                <h3 className=" text-white bg-success" style={{height:'3em',textAlign:"center"}}>YOUR ACCOUNT</h3>
                <ul className="row mt-5" >
                    <dt className="col-sm-3" style={{fontSize:"16px"}}>Full Name</dt><dd className="col-sm-9" style={{fontSize:"16px"}}> {name}</dd>
                    <dt className="col-sm-3 mt-3" style={{fontSize:"16px"}}>Phone Number</dt><dd className="col-sm-9 mt-3" style={{fontSize:"16px"}}> {number}</dd>
                    <dt className="col-sm-3 mt-3" style={{fontSize:"16px"}}>Address</dt><dd className="col-sm-9 mt-3" style={{fontSize:"16px"}}> {address}</dd>
                    <dt className="col-sm-3 mt-3" style={{fontSize:"16px"}}>Zip/Postal code</dt><dd className="col-sm-9 mt-3" style={{fontSize:"16px"}}> {zip}</dd>
                    <dt className="col-sm-3 mt-3" style={{fontSize:"16px"}}>Date of Birth</dt><dd className="col-sm-9 mt-3" style={{fontSize:"16px"}}> {date}</dd>
                    <dt className="col-sm-3 mt-3" style={{fontSize:"16px"}}>Email</dt><dd className="col-sm-9 mt-3" style={{fontSize:"16px"}}> {email}</dd>
                    <dt className="col-sm-3 mt-3" style={{fontSize:"16px"}}>Country</dt><dd className="col-sm-9 mt-3" style={{fontSize:"16px"}}> {country}</dd>
                    <li className="list-group-item " style={{color: 'blue',width:'95%',fontSize:"16px"}}>
                        {role === 1 ? "Admin" : "You are a Registered User"}
                    </li>
                </ul>
            </div>
        );
    };






    return (
        <div style={{marginLeft:"100px"}}>

        <Layout title="Dashboard" description={`Good day ${name}!`} className="container-fluid">
        


            <div className="row">
                <div className="col-3">
                    {userLinks()}
                </div>
                <div className="col-9">
                    {userInfo()}
                </div>
            </div>

        </Layout>
        </div>
    );
};

export default Dashboard;