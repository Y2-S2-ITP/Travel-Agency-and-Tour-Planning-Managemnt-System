import React, { Component } from 'react';
import "../style/adminEditPackageReservation.css";
import Imglogo from "../images/logo.png";
import axios from 'axios';
import HouseIcon from '@material-ui/icons/House';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ExploreIcon from '@material-ui/icons/Explore';
import DescriptionIcon from '@material-ui/icons/Description';
import SecurityIcon from '@material-ui/icons/Security';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';


export default class adminEditPackageReservation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reservationID: "",
            userID: "",
            PackageID: "",
            packageStatus: "",
            dueDate: "",
            reservationDate: "",
            noOfAdults: "",
            noOfChilds: "",
            paidAmount: ""
        };

    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const { reservationID, userID, PackageID, packageStatus, dueDate, reservationDate, noOfAdults, noOfChilds, paidAmount} = this.state;

        const data = {
            reservationID: reservationID,
            userID: userID,
            PackageID: PackageID,
            packageStatus: packageStatus,
            dueDate: dueDate,
            reservationDate: reservationDate,
            noOfAdults: noOfAdults,
            noOfChilds: noOfChilds,
            paidAmount: paidAmount,
        }

        console.log(data)

        axios.put(`http://localhost:8000/tourPackageReservation/UpdateReservation/${id}`, data).then((res) => {
            if (res.data.success)
                alert("Package updated Successfully");
            this.setState(
                {
                    reservationID: "",
                    userID: "",
                    PackageID: "",
                    packageStatus: "",
                    dueDate: "",
                    reservationDate: "",
                    noOfAdults: "",
                    noOfChilds: "",
                    paidAmount: ""
                }
            )
        })
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/tourPackageReservation/get/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    reservationID: res.data.post.reservationID,
                    userID: res.data.post.userID,
                    PackageID: res.data.post.PackageID,
                    packageStatus: res.data.post.packageStatus,
                    dueDate: res.data.post.dueDate,
                    reservationDate: res.data.post.reservationDate,
                    noOfAdults: res.data.post.noOfAdults,
                    noOfChilds: res.data.post.noOfChilds,
                    paidAmount: res.data.post.paidAmount
                });

                console.log(this.state.post);
            }
        });
    }

    render() {
        return (
            <div>
                <div>
                    <div className="container-fluid display-table">
                        <div className="row display-table-row">
                            <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                                <div className="logo">
                                    <a hef="home.html"><img src={Imglogo} alt="merkery_logo" className="hidden-xs hidden-sm" />

                                    </a>
                                </div>
                                <div className="navi">
                                    <ul>
                                    <li ><a href="#"><HouseIcon style={{ fontSize: 30,color:"#5584FF"}}/><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Accommadation</span></a></li>
                                <li><a href="#"><ConfirmationNumberIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ticket</span></a></li>
                                <li><a href="#"><LocalTaxiIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ground</span></a></li>
                                <li><a href="/adminTourHome"><ExploreIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Tour Package</span></a></li>
                                <li><a href="/AdminTravelDoc"><DescriptionIcon style={{ fontSize: 30,color:"#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Travel Document</span></a></li>
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
                                <>
                                    <hr />
                                </>

                                <form className="row g-3 needs-validation" novalidate>
                                    <div className="col-md-4">
                                        <label for="validationCustom01" className="form-label">Package ID</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom01"
                                            placeholder="Package ID"
                                            value={this.state.PackageID}
                                            name="PackageID"
                                            onChange={this.handleInputChange}
                                            disabled
                                            required />

                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationCustom02" className="form-label">Status</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            placeholder=""
                                            value={this.state.packageStatus}
                                            name="packageStatus"
                                            onChange={this.handleInputChange} required />

                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationCustom02" className="form-label">Due Date</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            placeholder=""
                                            value={this.state.dueDate}
                                            name="dueDate"
                                            onChange={this.handleInputChange} required />

                                    </div>

                                   
                                    
                                    <div className="col-md-4">
                                        <label for="validationCustom02" className="form-label">Reservation Date</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            placeholder=""
                                            value={this.state.reservationDate}
                                            name="reservationDate"
                                            onChange={this.handleInputChange} required />

                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationCustom02" className="form-label">No Of Adults</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            placeholder=""
                                            value={this.state.noOfAdults}
                                            name="noOfAdults"
                                            onChange={this.handleInputChange} required />

                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationCustom02" className="form-label">No Of Childs</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            placeholder=""
                                            value={this.state.noOfChilds}
                                            name="noOfChilds"
                                            onChange={this.handleInputChange} required />

                                    </div>

                                    <div className="col-md-4">
                                        <label for="validationTextarea" className="form-label">Paid Amount</label>
                                        <textarea className="form-control"
                                            id="validationTextarea"
                                            placeholder=""
                                            value={this.state.paidAmount}
                                            name="paidAmount"
                                            onChange={this.handleInputChange} required></textarea>

                                    </div>

                                    
                                    <div className="col-12">
                                        <button className="btn btn-primary" type="submit" onClick={this.onSubmit}>Update</button>
                                    </div>
                                </form>
                                {/*End Form for Tour Package*/}
                                <>
                                    <hr />
                                </>
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
            </div>
        )
    }
}
