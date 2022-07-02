import React, { Component } from 'react'
import "../style/payment.css";
import axios from 'axios';
import Header from "./header";
import Navbar from "./navbar";
import BackspaceIcon from '@material-ui/icons/Backspace';
import CancelIcon from '@material-ui/icons/Cancel';

//insurance book conmfrm
export default class ApplyInsurance extends Component {


  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
        
        insuranceID: "",
        dueDate: "",
        reserveDate: "",
        price: "",
        companyName:""
    };

    this.state = {
        post: {}
    };
}

handleInputChange = (e) =>{
  const {name,value} = e.target;

  this.setState({
      ...this.state,
      [name]:value
  })
}

onSubmit = (e) =>  {
    e.preventDefault();
    const {reservationID,userID, insuranceID, dueDate, reserveDate, price } = this.state;

    const newReservation = {
        reservationID: reservationID,
        userID: userID,
        insuranceID: insuranceID,
        dueDate: dueDate,
        reserveDate: reserveDate,
        price: price
    }

    axios.post("http://localhost:8000/InsuranceReservation/createInsuranceReservation", newReservation).then(() => {
        console.log(newReservation);
        alert("Insurance Reservation Added");
    }).catch((err) => {
        alert(err);
    })

}

componentDidMount() {

    const id = this.props.match.params.id;
    const insuranceID = this.props.match.params.insuranceID;
    const price = this.props.match.params.price;


      this.setState({
        insuranceID:insuranceID,
        price:price
    
    });

    axios.get(`http://localhost:8000/InsuranceType/get/${id}`).then((res) => {
        if (res.data.success) {
            this.setState({
                post: res.data.post,

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
      ImageLink } = this.state.post;


    return (
        <div>
            <Header />
            <Navbar />

            <button class="btn btn2"><BackspaceIcon style={{ marginTop: '-2px' }} /> Back</button>
            <div className="breadcrumb">
                <div>
                    <div class="row">
                        <div class="btn-group btn-breadcrumb">
                            <a href="#" class="btn btn-primary"><i class="glyphicon glyphicon-home"></i></a>
                            <a href="/Insurance" class="btn btn-primary">Insurance</a>
                            <a href={`/Insurance/${this.props.match.params.id}`} class="btn btn-primary">{insuranceType}</a>
                            <a href="#" class="btn btn-primary disabled">Apply</a>
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

                  <h4 class="pro-d-title">
                  {insuranceType}
                  </h4>
                  <div class="product_meta">
                  <span class="posted_in"> <strong>Company Name : </strong>{companyName}</span>
                  <span class="tagged_as"><strong>Price : </strong>Rs. {price}</span>
                </div>
                
              </div>
              
			  
          </div>
          <div class="col-md-6">
            
			  
              <form  onSubmit={this.onSubmit}>
                                          <fieldset>
                                              <div className="form-group">

                                              <div className="form-group" >
                                              <label>Reservation Date</label>
                                              <input
                                                type="date"
                                                name="reserveDate"
                                                class="form-control"
                                                value={this.state.reserveDate}
                                                onChange={this.handleInputChange} required />
                                            </div>

                                            <div className="form-group" >
                                              <label>Due Date</label>
                                              <input
                                                type="date"
                                                name="dueDate"
                                                class="form-control"
                                                value={this.state.dueDate}
                                                onChange={this.handleInputChange} required />
                                            </div>
											  
										

                                              </div>
											  <div className="container3">
                                                
                        <div class="col-xs-12">
                                                <input type="submit" class="btn btn-warning btn-lg btn-block" />
                                            </div>
                                              </div>
											  </fieldset>
                                      </form>
          </div>
      </div>
  </section>
  </div>
  </div>

        </div>
    )
}

}
