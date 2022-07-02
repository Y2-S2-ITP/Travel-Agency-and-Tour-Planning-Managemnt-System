import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "../style/header.css";
import Imglogo from "../images/logo.png";
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import "../style/footer.css";


const Record = (props) => (
    
   
            <div className="col mb-5">
                <div className="card h-100">
                    
                    <img className="card-img-top" src={props.record.link} alt="..." />
                    
                    <div className="card-body p-4">
                        <div className="text-center">
                        <h5 className="fw-bolder"> Name: {props.record.name}</h5>
                        <h5 className="fw-bolder">Location: {props.record.location}</h5>
                        <h5 className="fw-bolder">Type: {props.record.type}</h5>
                        <h5 className="fw-bolder">Phone: {props.record.phone}</h5>
                        <h5 className="fw-bolder">Price:Rs{props.record.price}/=</h5>
                        
                        
                       
     
                        </div>
                    </div>
                    
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href={"/accommodation/main/booknow/" + props.record._id}>Book now</a></div>
                    </div>
                </div>
            </div>


    
  );
   
  export default class RecordList extends Component {
    // This is the constructor that shall store our data retrieved from the database
    constructor(props) {
      super(props);
      this.deleteRecord = this.deleteRecord.bind(this);
      this.state = { records: [] };
    }
   
    // This method will get the data from the database.
    componentDidMount() {
      axios
        .get("http://localhost:8000/accommodation/")
        .then((response) => {
          this.setState({ records: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
   
    // This method will delete a record based on the method
    deleteRecord(id) {
      axios.delete("http://localhost:8000/accommodation/delete/" + id).then((response) => {
        console.log(response.data);
      });
   
      this.setState({
        record: this.state.records.filter((el) => el._id !== id),
      });
    }
   
    // This method will map out  on the table
    recordList() {
      return this.state.records.map((currentrecord) => {
        return (
          <Record
            record={currentrecord}
            deleteRecord={this.deleteRecord}
            key={currentrecord._id}
          />
        );
      });
    }

    filterData(records,searchKey){
       const result=records.filter((accommodations)=>
       accommodations.name.toLowerCase().includes(searchKey)||
       accommodations.location.toLowerCase().includes(searchKey)||
       accommodations.type.toLowerCase().includes(searchKey)
       
       
       )
       this.setState({records:result})
    }

    handleSerchArea=(e) =>{
        
        const searchKey=e.currentTarget.value;
        console.log(searchKey);
        axios
        .get("http://localhost:8000/accommodation/")
        .then((response) => {
          this.filterData(response.data,searchKey);
          console.log("successfull");
        });
        

    }
    
   
   
    // This following section will display the table with the records of individuals.
    render() {
      return (
          
        <div > 
          
      

             <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Book Your Accommodation here</h1>
                    <p className="lead fw-normal text-white-50 mb-0"></p>
                </div>
            </div>
                    </header>
        <div>
        <nav class="navbar navbar-light bg-light">
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href={"/accommodation/main/manage_reservation"}>your reservations</a></div>


</nav>
        </div>
                <div>

                
                                <nav class="navbar navbar-light bg-light">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSerchArea} />
                            
                        </form>
                        </nav>
                        <br/> <br/> <br/>
                        
                       
                  
                        



                        


                </div>
                
        
            <section className="py-5">
                 <div className="container px-4 px-lg-5 mt-5">
                     <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"> 
                        {this.recordList()}
          
          
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
  