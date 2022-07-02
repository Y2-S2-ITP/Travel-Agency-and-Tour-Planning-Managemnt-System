import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";
import "../style/footer.css";
import Imglogo from "../images/logo.png";
import "../style/header.css";

import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
 
class Edit extends Component {
  // This is the constructor that stores the data.
  
  constructor(props) {
    super(props);
 
    this.onChangeaccommodation_ID  = this.onChangeaccommodation_ID.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangelocation = this.onChangelocation.bind(this);
    this.onChangetype = this.onChangetype.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);
    this.onChangeowner = this.onChangeowner.bind(this);
    this.onChangephone = this.onChangephone.bind(this);
    this.onChangelink = this.onChangelink.bind(this);

 

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
        accommodation_ID: "",
        name: "",
        location: "",
        type: "",
        price: "",
        owner: "",
        phone: "",
        link: "",


      records: [],
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:8000/accommodation/get/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          accommodation_ID: response.data.accommodation_ID,
          name: response.data.name,
          location: response.data.location,
          type: response.data.type,
          price: response.data.price,
          owner: response.data.owner,
          phone: response.data.phone,
          link: response.data.link,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  // These methods will update the state properties.
  onChangeaccommodation_ID(e) {
    this.setState({
      accommodation_ID: e.target.value,
    });
  }
 
  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }
 
 
  onChangelocation(e) {
    this.setState({
      location: e.target.value,
    });
  }
  onChangetype(e) {
    this.setState({
      type: e.target.value,
    });
  }
  onChangeprice(e) {
    this.setState({
      price: e.target.value,
    });
  }
  onChangeowner(e) {
    this.setState({
      owner: e.target.value,
    });
  }
  onChangephone(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  onChangelink(e) {
    this.setState({
      link: e.target.value,
    });
  }
 
  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditedaccommodation = {
      accommodation_ID: this.state.accommodation_ID,
      name: this.state.name,
      location: this.state.location,
      type: this.state.type,
      price: this.state.price,
      owner: this.state.owner,
      phone: this.state.phone,
    };
    console.log(newEditedaccommodation);

  
 
    // This will send a post request to update the data in the database.
    
    axios
      .put(
        "http://localhost:8000/accommodation/update/" + this.props.match.params.id,
        newEditedaccommodation
      )
      .then((res) => console.log(res.data));
      
 
    this.props.history.push("/home");
  }
  render() {
    return (
        
      <div>
         
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href={"/accommodation/main/manage_reservation"}>your reservations</a></div>


        
        <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={this.state.link} alt="..." /></div>
                <div className="col-md-6">
                    <div className="small mb-1">{this.state.type}</div>
                    <h1 className="display-5 fw-bolder">{this.state.name}</h1>
                    <div className="fs-5 mb-5">
                        <span>Rs:{this.state.price}/=</span>
                    </div>
                    <p className="lead">Location:{this.state.location}</p>
                    <p className="lead">Phone:{this.state.phone}</p>


                    <form>
                        <div class="form-group row">
                          <label for="staticEmail" class="col-sm-2 col-form-label"></label>
                          <div class="col-sm-10">
                            <input type="text" class="visually-hidden"id="staticEmail" value={this.props.match.params.id}/>
                          </div>
                        </div>
                        
                    </form>



                    <div className="d-flex">
                        <a href={"/accommodation/booknow/"+ this.props.match.params.id+"/"+this.state.price} class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>











    <footer id="dk-footer" class="dk-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-lg-4 container8">
                            <div class="dk-footer-box-info">
                                <a href="index.html" class="footer-logo">
                                    <img src={Imglogo} alt="footer_logo" class="img-fluid" />
                                </a>
                                <p class="pTag footer-info-text">
                                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                                </p>
                                <div class="footer-social-link">
                                    <h3>Follow us</h3>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div class="footer-awarad">
                                <img src="images/icon/best.png" alt="" />
                                <p className="pTag">Best Travel Agency</p>
                            </div>
                        </div>

                        <div class="col-md-12 col-lg-8">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="contact-us">
                                        <div class="contact-icon">
                                            <i class="fa fa-map-o" aria-hidden="true"></i>
                                        </div>

                                        <div class="contact-info">
                                            <h3>Jaipur India</h3>
                                            <p  className="pTag">5353 Road Avenue</p>
                                        </div>

                                    </div>

                                </div>

                                <div class="col-md-6">
                                    <div class="contact-us contact-us-last">
                                        <div class="contact-icon">
                                            <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                                        </div>

                                        <div class="contact-info">
                                            <h3>95 711 9 5353</h3>
                                            <p  className="pTag">Give us a call</p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-12 col-lg-6">
                                    <div class="footer-widget footer-left-widget">
                                        <div class="section-heading">
                                            <h3>Useful Links</h3>
                                            <span class="animate-border border-black"></span>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">About us</a>
                                            </li>
                                            <li>
                                                <a href="#">Services</a>
                                            </li>
                                            <li>
                                                <a href="#">Projects</a>
                                            </li>
                                            <li>
                                                <a href="#">Our Team</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="#">Contact us</a>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                            </li>
                                            <li>
                                                <a href="#">Testimonials</a>
                                            </li>
                                            <li>
                                                <a href="#">Faq</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                                <div class="col-md-12 col-lg-6">
                                    <div class="footer-widget">
                                        <div class="section-heading">
                                            <h3>Subscribe</h3>
                                            <span class="animate-border border-black"></span>
                                        </div>
                                        <p  className="pTag">
                                            Reference site about Lorem Ipsum, giving information on its origins, as well.</p>
                                        <form action="#">
                                            <div class="form-row">
                                                <div class="col dk-footer-form">
                                                    <input type="email" class="form-control" placeholder="Email Address" />
                                                    <button type="submit">
                                                        <i style={{color:"white"}} class="fa fa-send"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>



                <div class="copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <span>Copyright © 2019, All Right Reserved Seobin</span>
                            </div>

                            <div class="col-md-6">
                                <div class="copyright-menu">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div id="back-to-top" class="back-to-top">
                    <button class="btn btn-dark" title="Back to Top">
                        <i class="fa fa-angle-up"></i>
                    </button>
                </div>

            </footer>

    </div>
    );
  }









}
export default withRouter(Edit);