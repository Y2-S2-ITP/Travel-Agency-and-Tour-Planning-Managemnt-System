import React from 'react';
import "../style/admin.css";
import Imglogo from "../images/logo.png";
import HouseIcon from '@material-ui/icons/House';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ExploreIcon from '@material-ui/icons/Explore';
import DescriptionIcon from '@material-ui/icons/Description';
import SecurityIcon from '@material-ui/icons/Security';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';

export default function GroundAdmin() {
    return (
        <div>
            <div className="display-table">
                <div className="row display-table-row">
                    <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                        <div className="logo">
                            <a hef="home.html"><img src={Imglogo} alt="merkery_logo" className="hidden-xs hidden-sm" />

                            </a>

                        </div>
                        <h3 style={{ color: "white" }}><b>Admin Panel</b></h3>
                        <div className="navi">
                            <ul>
                                <li ><a href="/admin_panel/accommodation_admin"><HouseIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Accommadation</span></a></li>
                                <li><a href="#"><ConfirmationNumberIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ticket</span></a></li>
                                <li><a href="/groundadmin"><LocalTaxiIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ground</span></a></li>
                                <li><a href="/adminTourHome"><ExploreIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Tour Package</span></a></li>
                                <li><a href="/admintravelDoc"><DescriptionIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Travel Document</span></a></li>
                                <li><a href="#"><SecurityIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Insurance</span></a></li>
                                <li><a href="#"><EventIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Event</span></a></li>
                                <li><a href="/AdminUserManagement"><GroupIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;User MAnagement</span></a></li>

                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="col" style={{marginAuto:"0px",marginTop:"230px"}}>
                        <center>
                           <div>
                                <a className="btn btn-success m-4 p-3" style={{paddingTop:"20px",fontSize:"22px"}} href={"/admin/ground/guide"}>Guide Management</a>
                                <a className="btn btn-success m-4 p-3" style={{paddingTop:"20px",fontSize:"22px"}} href={"/admin/ground/car"}>Car Management</a>
                            </div>

                            <div>
                                
                            <a className="btn btn-danger m-4 p-3" style={{paddingTop:"20px",fontSize:"22px"}} href={"/admin/ground/guidereservation"}>Guide Reservation</a>
                                <a className="btn btn-danger  m-4 p-3" style={{paddingTop:"20px",fontSize:"22px"}} href={"/admin/ground/carreservation"}>Car Reservations</a>
                            </div>
                            </center>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    )
}






































































/*
return (

    <div className="container">
        <div className="row">
            <div className="col lg-10">
                <div className="col-lg-2 mt-3"></div>


            </div>
        </div>
    </div>



)

}
*/