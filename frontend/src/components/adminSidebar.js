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

import ABusPage  from './Admin_Bus_page';
import ATrainPage from './Admin_Railway_page';

import AdminButtons from './AdminButton';
import AAirlinePage from './Admin_Airline_page';
import TrainReservationHeader from './TrainreservationHeader';
import BusReservationHeader from './BusreservationHeader';
import EventReservationHeader from './EventreservationHeader';
import AirlineReservationHeader from './AirlinereservationHeader';
import BusReservationPage from './Bus_reservation_Adminpage';
import AirlineReservationPage from './Airline_reservation_Admin';
import EventReservationPage from './Event_reservation_Admin';
import TrainReservationPage from './Train_reservation_Adminpage';

import {BrowserRouter as Router, Route} from "react-router-dom";



export default function adminSidebar() {
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
                                <li><a href="/tickets"><ConfirmationNumberIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ticket</span></a></li>
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
                        
                            <h1>Welcome to Admin Panel</h1>
                        <Router>
                            <Route path="/tickets" exact component={AdminButtons} />
                            <Route path="/abus" exact component={ABusPage} />
                            <Route path="/atrain" exact component={ATrainPage} />
                            <Route path="/aairline" exact component={AAirlinePage} />
                            <Route exact path="/rbus" component={BusReservationHeader} />
                            <Route exact path="/rbus" component={BusReservationPage} />
                            <Route exact path="/rtrain" component={TrainReservationHeader} />
                            <Route exact path="/rtrain" component={TrainReservationPage} />
                            <Route exact path="/rairline" component={AirlineReservationHeader} />
                            <Route exact path="/rairline" component={AirlineReservationPage} />
                            <Route exact path="/revent" component={EventReservationHeader} />
                            <Route exact path="/revent" component={EventReservationPage} />
                        </Router>

                    </div>
                </div>

            </div>



        </div>
    )
}

