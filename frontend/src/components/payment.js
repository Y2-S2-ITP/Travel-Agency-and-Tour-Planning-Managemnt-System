import React, { Component } from 'react'
import "../style/payment.css";
import axios from 'axios';
import Header from "./header";
import Navbar from "./navbar";
import Menu from "./Menu";
import BackspaceIcon from '@material-ui/icons/Backspace';
import CancelIcon from '@material-ui/icons/Cancel';

export default class payment extends Component {

    constructor(props) {
        super(props);
        const id = this.props.match.params.id;
        this.state = {
            
            userName: "",
            userEmail: "",
            PackageID: "",
            packageStatus: "",
            dueDate: "",
            reservationDate: "",
            noOfAdults: "",
            noOfChilds: "",
            paidAmount: ""
        };

        this.state = {
            post: {}
        };
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {userName,userEmail, PackageID, packageStatus, dueDate, reservationDate, noOfAdults, noOfChilds, paidAmount } = this.state;

        const newReservation = {

            userName: userName,
            userEmail: userEmail,
            PackageID: PackageID,
            packageStatus: packageStatus,
            dueDate: dueDate,
            reservationDate: reservationDate,
            noOfAdults: noOfAdults,
            noOfChilds: noOfChilds,
            paidAmount: paidAmount
        }

        axios.post("http://localhost:8000/tourPackageReservation/createReservation", newReservation).then(() => {
            console.log(newReservation);
            alert("Payment successfull!");
        }).catch((err) => {
            alert(err);
        });

    }

    componentDidMount() {

        const id = this.props.match.params.id;
        const pkg = this.props.match.params.pkg;
        const adult = this.props.match.params.adult;
        const child = this.props.match.params.child;
        const total = this.props.match.params.total;
        const date = this.props.match.params.date;

        let token = localStorage.getItem("jwt");
        
        token = JSON.parse(token)
        let userName = token.user.name;
        let userEmail = token.user.email;
        console.log(userName);
        console.log(userEmail);
        

        this.setState({
            userName:userName,
            userEmail:userEmail,
            PackageID:pkg,
            packageStatus:"completed",
            dueDate:date,
            noOfAdults:adult,
            noOfChilds:child,
            paidAmount:total
        
        });

        axios.get(`http://localhost:8000/tourPackage/get/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post,

                });

                console.log(this.state.post);
            }
        });
    }

    render() {
       
        const { packageID,
            packageName } = this.state.post;


        return (
            <div>
                <Menu />
                <Navbar />

                <button class="btn btn2"><BackspaceIcon style={{ marginTop: '-2px' }} /> Back</button>
                <div className="breadcrumb">
                    <div>
                        <div class="">
                            <div class="btn-group btn-breadcrumb">
                                <a href="#" class="btn btn-primary"><i class="glyphicon glyphicon-home"></i></a>
                                <a href="/" class="btn btn-primary">Packages</a>
                                <a href="#" class="btn btn-primary">{packageName}</a>
                                <a href="#" class="btn btn-primary disabled">Payment</a>
                            </div>
                        </div>

                    </div>

                </div>
                <h2 className="checkPay">Check and Pay</h2>

                <div class="container register">
                    <div class="row">
                        <div class="col-md-3 register-left">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                            <h3>PAY NOW! </h3>
                            <p>You are 30 seconds away from earning your own money!</p>
                        </div>

                    </div>

                    {/*cancelation-*/}
                    <div class="social-box cancelation">
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-4 col-xs-12 text-center">
                                    <div class="box">
                                        <CancelIcon style={{ fontSize: 50 }} />
                                        <div class="box-title">
                                            <h3 className="text3">Cancellation policy</h3>
                                        </div>
                                        <div class="box-text">
                                            <span>You can cancel for free until 24 hours before the start time listed</span>
                                        </div>
                                        <div class="box-btn">
                                            <a href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*customer details*/}
                    <div class="row details">
                        <div class="col-xs-12 col-md-4 col-md-offset-4 row2">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 style={{textAlign:"center",fontSize:25,marginTop:10}}>Details</h3>

                                    <hr />

                                </div>
                                <div class="panel-body">
                                    


                                        {/*credit card details*/}

                                        <h3 style={{textAlign:"center",fontSize:25,marginTop:10}}>{packageName}</h3>
                                        <h4 style={{textAlign:"center",fontSize:17,marginTop:10}}>Date - {this.props.match.params.date}</h4>
                                        <h4 style={{textAlign:"center",fontSize:25,marginTop:10}}>LKR : {this.props.match.params.total} /=</h4>
                                        <hr />
                                        <div class="row">
                                            <h3 style={{fontSize:20}} class="text-center">Payment Details</h3>
                                            <img class="img-responsive cc-img img1" src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png" />
                                        </div>

                                        <form>

                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div style={{textAlign:"center"}} class="form-group">
                                                    <label style={{fontSize:15}}>CARD NUMBER</label>
                                                    <div class="input-group inputfield">
                                                        <input type="text" 
                                                        class="form-control" 
                                                        placeholder="Valid Card Number" 
                                                        required />
                                                        <span class="input-group-addon"><span class="fa fa-credit-card"></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-7 col-md-7">
                                                <div class="form-group inputfield">
                                                    <label><span class="hidden-xs">EXPIRATION</span><span class="visible-xs-inline">EXP</span> DATE</label>
                                                    <input type="text" 
                                                    class="form-control" 
                                                    placeholder="MM / YY" 
                                                    required />
                                                </div>
                                            </div>
                                            <div class="col-xs-5 col-md-5 pull-right">
                                                <div class="form-group inputccv">
                                                    <label>CV CODE</label>
                                                    <input type="number" 
                                                    maxLength="3"
                                                    class="form-control" 
                                                    placeholder="CVC" 
                                                    pattern="[0-9]{3}" 
                                                    required />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group inputfield">
                                                    <label>CARD OWNER</label>
                                                    <input type="text" class="form-control" placeholder="Card Owner Names" required />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="panel-footer">
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <input type="submit" class="btn btn-warning btn-lg btn-block" onClick={this.onSubmit}/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
