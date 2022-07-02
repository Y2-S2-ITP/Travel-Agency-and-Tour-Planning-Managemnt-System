import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style/summary.css";
import "../style/ticket.css";
import "../style/InsuranceDetails.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Header from "./header";
import Navbar from "./navbar";
import Footer from './footer';
import BackspaceIcon from '@material-ui/icons/Backspace';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DriveEtaIcon from '@material-ui/icons/DriveEta';



//insurance type book detail display

//class component
export default class InsuranceDetails extends Component {
    // This is the constructor that stores the data.
    
    constructor(props) {
      super(props);
      this.state = {
          post: {},
      };


  }

  componentDidMount() {

      const id = this.props.match.params.id;

      axios.get(`http://localhost:8000/InsuranceType/get/${id}`).then((res) => {
          if (res.data.success) {
              this.setState({
                  post: res.data.post
              });

              console.log(this.state.post);
          }
      });
  }

  render() {

      const { insuranceID,
          insuranceType,
          companyName,
          price,
          description,
          ImageLink } = this.state.post;


      return (
          <div>
              <div>
                  <Header />
                  <Navbar />
              </div>


              <button class="btn btn2"><BackspaceIcon style={{ marginTop: '-2px' }} /> Back</button>
              <div className="breadcrumb">
                  <div>
                      <div class="row">
                          <div class="btn-group btn-breadcrumb">
                              <a href="#" class="btn btn-primary"><i class="glyphicon glyphicon-home"></i></a>
                              <a href="/Insurance" class="btn btn-primary">Insurance</a>
                              <a href="#" class="btn btn-primary disabled">{insuranceType}</a>
                             
                          </div>
                      </div>

                  </div>

              </div>
              
{/*new*/}
              <div class="container bootdey">
<div class="col-md-12">
<section class="panel">
      <div class="panel-body">
          <div class="col-md-6">
              <div class="pro-img-details">
                  <img src={ImageLink} alt=""/>
                
              </div>
              
			  
          </div>
          <div class="col-md-6">
              <h4 class="pro-d-title">
                  {insuranceType}
              </h4>
			  
			  <p>{description}</p>


              <div class="product_meta">
                  <span class="posted_in"> <strong>Company Name : </strong>{companyName}</span>
                  <span class="tagged_as"><strong>Price : </strong>Rs. {price}</span>
              </div>
			  
              <form accept-charset="UTF-8" role="form" onSubmit={this.onSubmit}>
                                          <fieldset>
                                            
											  <div className="container3">
                                                
                                                  <Link className="btn btn-lg btn-success btn3"
                                                      to={`/ApplyInsurance/${this.props.match.params.id}/${insuranceID}/${price}`}

                                                  >
                                                      Apply
                                              </Link>
                                              </div>
											  </fieldset>
                                      </form>
          </div>
      </div>
  </section>
  </div>
  </div>

{/*end*/}


              <Footer />
          </div >
      )
  }

  
  
}

