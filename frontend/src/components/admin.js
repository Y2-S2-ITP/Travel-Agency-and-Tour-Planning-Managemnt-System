import React, { useState } from 'react';
import "../style/admin.css";
import Imglogo from "../images/logo.png";
import Admincontroller from "./admincontroller";
import Admintour from "./admintour";
import AdmintourReservations from "./adminReservations";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HouseIcon from '@material-ui/icons/House';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ExploreIcon from '@material-ui/icons/Explore';
import DescriptionIcon from '@material-ui/icons/Description';
import SecurityIcon from '@material-ui/icons/Security';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';

export default function admin() {
    return (
        <div>
            <div className="display-table">
                <div className="row display-table-row">
                    <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                        <div className="logo">
                            <a hef="home.html"><img src={Imglogo} alt="merkery_logo" className="hidden-xs hidden-sm" />
                               
                            </a>
                            
                        </div>
                        <h3 style={{color:"white"}}><b>Admin Panel</b></h3> 
                        <div className="navi">
                            <ul>
                                <li ><a href="#"><HouseIcon style={{ fontSize: 30,color:"#5584FF"}}/><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Accommadation</span></a></li>
                                <li><a href="#"><ConfirmationNumberIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ticket</span></a></li>
                                <li><a href="/admin/ground"><LocalTaxiIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ground</span></a></li>
                                <li><a href="/adminTourHome"><ExploreIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Tour Package</span></a></li>
                                <li><a href="/admintravelDoc"><DescriptionIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Travel Document</span></a></li>
                                <li><a href="#"><SecurityIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Insurance</span></a></li>
                                <li><a href="#"><EventIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Event</span></a></li>
                                <li><a href="#"><GroupIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;User MAnagement</span></a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-11 display-table-cell v-align">
                        
                        <div className="row">
                            <header>
                                <div className="col-md-7">
                                    <nav className="navbar-default pull-left">
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#side-menu" aria-expanded="false">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                        </div>
                                    </nav>
                        
                                </div>
                                <div className="col-md-5">
                                    <div className="header-rightside">
                                        <ul className="list-inline header-top pull-right">
                                            <li className="hidden-xs"><a href="#" className="add-project" data-toggle="modal" data-target="#add_project">Add Project</a></li>
                                            <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                            <li>
                                                <a href="#" className="icon-info">
                                                    <i className="fa fa-bell" aria-hidden="true"></i>
                                                    <span className="label label-primary">3</span>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </header>
                        </div>
                        <Router>
                        <div className="user-dashboard">
                            <h1>Tour Packages</h1>
                            <Admincontroller />
                            <Route path="/admintour" exact component={Admintour} />
                            <Route path="/admintourReservations" exact component={AdmintourReservations} />
                        </div>
                        </Router>
                    </div>
                </div>

            </div>



            <div id="add_project" className="modal fade" role="dialog">
                <div className="modal-dialog">


                    <div className="modal-content">
                        <div className="modal-header login-header">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4 className="modal-title">Add Project</h4>
                        </div>
                        <div className="modal-body">
                            <input type="text" placeholder="Project Title" name="name" />
                            <input type="text" placeholder="Post of Post" name="mail" />
                            <input type="text" placeholder="Author" name="passsword" />
                            <textarea placeholder="Desicrption"></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="cancel" data-dismiss="modal">Close</button>
                            <button type="button" className="add-project" data-dismiss="modal">Save</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
