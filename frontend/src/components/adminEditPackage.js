import React, { Component } from 'react';
import "../style/admincontroller.css";
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


export default class adminEditPackage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            packageID: "",
            packageName: "",
            PackageType: "",
            NoOfDays: "",
            MealPlan: "",
            Transpotation: "",
            Activities: "",
            LocationList: "",
            PriceForAdult: "",
            PriceForChild: "",
            ImageLink: ""
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
        const { packageID, packageName, PackageType, NoOfDays, MealPlan, Transpotation, Activities, LocationList, PriceForAdult, PriceForChild,ImageLink } = this.state;

        const data = {
            packageID: packageID,
            packageName: packageName,
            PackageType: PackageType,
            NoOfDays: NoOfDays,
            MealPlan: MealPlan,
            Transpotation: Transpotation,
            Activities: Activities,
            LocationList: LocationList,
            PriceForAdult: PriceForAdult,
            PriceForChild: PriceForChild,
            ImageLink: ImageLink
        }

        console.log(data)

        axios.put(`http://localhost:8000/tourPackage/UpdatePackage/${id}`, data).then((res) => {
            if (res.data.success)
                alert("Package updated Successfully");
            this.setState(
                {
                    packageID: "",
                    packageName: "",
                    PackageType: "",
                    NoOfDays: "",
                    MealPlan: "",
                    Transpotation: "",
                    Activities: "",
                    LocationList: "",
                    PriceForAdult: "",
                    PriceForChild: "",
                    ImageLink: ""
                }
            )
        })
    }

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/tourPackage/get/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    packageID: res.data.post.packageID,
                    packageName: res.data.post.packageName,
                    PackageType: res.data.post.PackageType,
                    NoOfDays: res.data.post.NoOfDays,
                    MealPlan: res.data.post.MealPlan,
                    Transpotation: res.data.post.Transpotation,
                    Activities: res.data.post.Activities,
                    LocationList: res.data.post.LocationList,
                    PriceForAdult: res.data.post.PriceForAdult,
                    PriceForChild: res.data.post.PriceForChild,
                    ImageLink: res.data.post.ImageLink
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
                                <>
                                    <hr />
                                </>

                                <form className="row g-3 needs-validation" novalidate>
                                    <div className="col-md-4">
                                        <label for="validationCustom01" className="form-label">ID</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom01"
                                            placeholder="ID"
                                            value={this.state.packageID}
                                            name="packageID"
                                            onChange={this.handleInputChange}
                                            disabled
                                            required />

                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationCustom02" className="form-label">Name</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            placeholder="Name"
                                            value={this.state.packageName}
                                            name="packageName"
                                            onChange={this.handleInputChange} required />

                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationCustom02" className="form-label">Type</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            placeholder="Type"
                                            value={this.state.PackageType}
                                            name="PackageType"
                                            onChange={this.handleInputChange} required />

                                    </div>

                                    <div className="col-md-4">
                                        <label for="validationCustom02" className="form-label"># Of Days</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            placeholder="Days"
                                            value={this.state.NoOfDays}
                                            name="NoOfDays"
                                            onChange={this.handleInputChange} required />

                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationCustom02" className="form-label">Meal-Plan</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            placeholder="Meal-Plan"
                                            value={this.state.MealPlan}
                                            name="MealPlan"
                                            onChange={this.handleInputChange} required />

                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationCustom02" className="form-label">Transportation</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            placeholder="Transportation"
                                            value={this.state.Transpotation}
                                            name="Transpotation"
                                            onChange={this.handleInputChange} required />

                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationCustom02" className="form-label">Price (Adult)</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            placeholder="Price (Adult)"
                                            value={this.state.PriceForAdult}
                                            name="PriceForAdult"
                                            onChange={this.handleInputChange} required />

                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationCustom02" className="form-label">Price (Child)</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            placeholder="Price (Child)"
                                            value={this.state.PriceForChild}
                                            name="PriceForChild"
                                            onChange={this.handleInputChange} required />

                                    </div>

                                    <div className="mb-3 col-md-4">
                                        <label for="validationTextarea" className="form-label">Activity</label>
                                        <textarea className="form-control"
                                            id="validationTextarea"
                                            placeholder="Activities"
                                            value={this.state.Activities}
                                            name="Activities"
                                            onChange={this.handleInputChange} required></textarea>

                                    </div>
                                    <div className="mb-3 col-md-4">
                                        <label for="validationTextarea" className="form-label">Location</label>
                                        <textarea className="form-control"
                                            id="validationTextarea"
                                            placeholder="Locations"
                                            value={this.state.LocationList}
                                            name="LocationList"
                                            onChange={this.handleInputChange} required></textarea>

                                    </div>
                                    <div className="col-md-4">
                                        <label for="validationCustom02" className="form-label">Image Link</label>
                                        <input type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            placeholder="Image Link"
                                            value={this.state.ImageLink}
                                            name="ImageLink"
                                            onChange={this.handleInputChange} required />

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
