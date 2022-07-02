import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style/summary.css";
import "../style/ticket.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Header from "./header";
import Navbar from "./navbar";
import Footer from './footer';
import Menu from "./Menu";
import BackspaceIcon from '@material-ui/icons/Backspace';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DriveEtaIcon from '@material-ui/icons/DriveEta';


//class component
export default class packageDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            post: {},
            value1: 0,
            value2: 0
        };

        this.handleChange = this.handleChange.bind(this);

        this.decrementAdult = this.decrementAdult.bind(this)
        this.incrementAdult = this.incrementAdult.bind(this)

        this.decrementChild = this.decrementChild.bind(this)
        this.incrementChild = this.incrementChild.bind(this)


    }

    handleChange(date) {

        this.setState({
            startDate: date
        })
    }

    decrementAdult = (e) => {
        e.preventDefault();
        this.setState({
            value1: --this.state.value1
        })
    }
    incrementAdult = (e) => {
        e.preventDefault();
        this.setState({
            value1: ++this.state.value1
        })
    }
    decrementChild = (e) => {

        e.preventDefault();
        this.setState({
            value2: --this.state.value2
        })
    }
    incrementChild = (e) => {

        e.preventDefault();
        this.setState({
            value2: ++this.state.value2
        })
    }



    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/tourPackage/get/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });

                console.log(this.state.post);
            }
        });
    }

    render() {

        const { packageID,
            packageName,
            PackageType,
            NoOfDays,
            MealPlan,
            Transpotation,
            Activities,
            LocationList,
            PriceForAdult,
            PriceForChild } = this.state.post;


        return (
            <div>
                <div>
                    <Menu />
                    <Navbar />
                </div>


                <button class="btn btn2"><BackspaceIcon style={{ marginTop: '-2px' }} /> Back</button>
                <div className="breadcrumb">
                    <div>
                        <div class="">
                            <div class="btn-group btn-breadcrumb">
                                <a href="#" class="btn btn-primary"><i class="glyphicon glyphicon-home"></i></a>
                                <a href="/" class="btn btn-primary">Packages</a>
                                <a href="#" class="btn btn-primary disabled">{packageName}</a>
                                {/*<a href="#" class="btn btn-primary disabled">Primary</a>*/}
                            </div>
                        </div>

                    </div>

                </div>
                <h1 style={{textAlign:"center"}}>{packageName}</h1>
                <div id="coverimg" className="container">

                </div>


                {/*summary */}
                <div className="summary">
                    <div class="container-fluid">
                        <div class="row4">
                            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <div class="tile2">
                                    <div class="wrapper">
                                        <div style={{ color: "white" }} class="header2">Summary</div>

                                        <section class="our-webcoderskull padding-lg">
                                            <div class="container6">
                                                <ul class="list1">
                                                    <li class="col-12 col-md-6 col-lg-3">
                                                        <div class="cnt-block equal-hight" style={{ height: "249px"}}>
                                                            <CalendarTodayIcon style={{ fontSize: 70, color: "red" }} />
                                                            <h3>No of Days</h3>
                                                            <h4 style={{ color: "blue" }}>{NoOfDays}</h4>
                                                        </div>
                                                    </li>
                                                    <li class="col-12 col-md-6 col-lg-3">
                                                        <div class="cnt-block equal-hight" style={{ height: "249px" }}>
                                                            <DriveEtaIcon style={{ fontSize: 70, color: "red" }} />
                                                            <h3>Transportation</h3>
                                                            <h4 style={{ color: "blue" }}>{Transpotation}</h4>
                                                        </div>
                                                    </li>
                                                    <li class="col-12 col-md-6 col-lg-3">
                                                        <div class="cnt-block equal-hight" style={{ height: "249px" }}>
                                                            <FastfoodIcon style={{ fontSize: 70, color: "red" }} />
                                                            <h3>Meal Plan</h3>
                                                            <h4 style={{ color: "blue" }}>{MealPlan}</h4>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </section>
                                        <div class="stats">

                                            <strong>Type</strong>
                                            <p></p>
                                            <p>{PackageType}</p>


                                        </div>

                                        <div class="stats">

                                            <strong>Activities</strong>
                                            <p></p>
                                            <p>{Activities}</p>

                                        </div>

                                        <div class="stats">

                                            <strong>Location List</strong>
                                            <p></p>
                                            <p>{LocationList}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*ticket and prices*/}

                <div>
                    <div className="container5">
                        <div className="row3">
                            <div className="col-md-4 col-md-offset-4 ticket">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 style={{textAlign:"center"}} className="panel-title">Tickets and Prices</h3>
                                    </div>
                                    <div className="panel-body">
                                        <form accept-charset="UTF-8" role="form" >
                                            <fieldset>
                                                <div style={{textAlign:"center",fontSize:15}} className="form-group">
                                                    <p style={{textAlign:"center",fontSize:15}}>When are you going ?</p>
                                                    <DatePicker selected={this.state.startDate} onChange={this.handleChange}
                                                        dateFormat='yyyy/MM/dd'
                                                        minDate={new Date()}
                                                    />


                                                </div>
                                                <div style={{textAlign:"center",fontSize:15,height:250}} className="ticketcenter">
                                                    <p>How many tickets ?</p>
                                                    <div className="increment">
                                                        <div className="incrementInside">
                                                            <h4>Adults (18+)</h4>
                                                            <h4>

                                                                LKR : {PriceForAdult * this.state.value1} </h4>
                                                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                        </div>
                                                        <button className="incrementbtn" onClick={this.decrementAdult}>-</button>
                                                        <input type="text" value={this.state.value1} className="incrementvalue" size="1" />
                                                        <button className="incrementbtn" onClick={this.incrementAdult}>+</button>
                                                    </div>
                                                    <div className="increment">
                                                        <div>
                                                            <h4>Child (3-18)</h4>
                                                            <h4>
                                                                LKR : {PriceForChild * this.state.value2} </h4>
                                                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                        </div>
                                                        <button className="incrementbtn" onClick={this.decrementChild}>-</button>
                                                        <input type="text" value={this.state.value2} className="incrementvalue" size="1" />
                                                        <button className="incrementbtn" onClick={this.incrementChild}>+</button>
                                                    </div>

                                                    <div >
                                                        <h2 style={{textAlign:"center",fontSize:25}}>Total : {PriceForAdult * this.state.value1 + PriceForChild * this.state.value2} /=</h2>
                                                    </div>

                                                </div>
                                                <div className="container3">

                                                    <Link className="btn btn-lg btn-success btn3"
                                                        to={`/payment/${this.props.match.params.id}/${packageID}/${this.state.value1}
                                                        /${this.state.value2}/${PriceForAdult * this.state.value1 + PriceForChild * this.state.value2}
                                                        /${this.state.startDate}`}

                                                    >
                                                        Proceed
                                                    </Link>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

