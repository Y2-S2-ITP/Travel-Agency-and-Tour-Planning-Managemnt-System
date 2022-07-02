import React, { Component } from "react";

import axios from 'axios';

export default class BookAccommodation extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeuser_ID = this.onChangeuser_ID.bind(this);
    this.onChangeaccommodation_ID = this.onChangeaccommodation_ID.bind(this);
    this.onChangeDueDate = this.onChangeDueDate.bind(this);
    this.onChangeReserv_Date = this.onChangeReserv_Date.bind(this);
    this.onChangeNO_of_Accommodation = this.onChangeNO_of_Accommodation.bind(this);
    this.onChangeNO_of_Adults = this.onChangeNO_of_Adults.bind(this);
    this.onChangeNO_of_childs = this.onChangeNO_of_childs.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
        user_ID: '',
        accommodation_ID: this.props.match.params.id,
        DueDate: '',
        Reserv_Date:'',
        NO_of_Accommodation: '',
        NO_of_Adults: '',
        NO_of_childs: '',
        price: '',
    }
  }

  onChangeuser_ID(e) {
    this.setState({ user_ID: e.target.value })
  }

  onChangeaccommodation_ID(e) {
    this.setState({ accommodation_ID: e.target.value })
  }

  onChangeDueDate(e) {
    this.setState({ DueDate: e.target.value })
  }
  onChangeReserv_Date(e) {
    this.setState({ Reserv_Date: e.target.value })
  }
  onChangeNO_of_Accommodation(e) {
    this.setState({ NO_of_Accommodation: e.target.value })
  }
  onChangeNO_of_Adults(e) {
    this.setState({ NO_of_Adults: e.target.value })
  }
  onChangeNO_of_childs(e) {
    this.setState({ NO_of_childs: e.target.value })
  }
  onChangeprice(e) {
    this.setState({ price: e.target.value })
  }
  


  onSubmit(e) {
    e.preventDefault()

    const AccommodationObject = {
        user_ID:this.state.user_ID,
        accommodation_ID: this.state.accommodation_ID,
        DueDate: this.state.DueDate,
        Reserv_Date: this.state.Reserv_Date,
        NO_of_Accommodation: this.state.NO_of_Accommodation,
        NO_of_Adults: this.state.NO_of_Adults,
        NO_of_childs: this.state.NO_of_childs,
        price: this.state.price

    };
    axios.post('http://localhost:8000/accommodation_reservation/add', AccommodationObject)
    .then(()=>{
        alert("Accommodation Booked")
      }).catch((err)=>{
         alert(err)
      })  

    this.setState({ user_ID: '',
    accommodation_ID: '',
    DueDate: '',
    Reserv_Date: '',
    NO_of_Accommodation: '',
    NO_of_Adults: '',
    NO_of_childs: '',
    price: '' })
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>

        <nav class="navbar navbar-light bg-light">
        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href={"/accommodation/main/manage_reservation"}>your reservations</a></div>


        </nav>
<br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>

        <div className="container">
        <h3 align="center">collect infomation</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group" >
            <label>User ID: </label>
            <input
              type="Number"
              className="form-control"
              value={this.state.user_ID}
              onChange={this.onChangeuser_ID}
              required
            />
          </div>
          <div className="visually-hidden">
            <label>Accommodation ID: </label>
            <input
              type="text"
              className="form-control"
              readonly class="form-control-plaintext"
              value={this.state.accommodation_ID}
              onChange={this.onChangeaccommodation_ID}
              required
            />
            
          </div>
          <div className="form-group">
            <label> Booking Date: </label>
            <input
              type="date"
              className="form-control"
              value={this.state.Reserv_Date}
              onChange={this.onChangeReserv_Date}
              required
            />
          </div>
          <div className="form-group">
            <label> Due Date: </label>
            <input
              type="date"
              className="form-control"
              value={this.state.DueDate}
              onChange={this.onChangeDueDate}
              required
            />
          </div>
          <div className="form-group">
            <label>No of Rooms </label>
            <input
              type="number"
              className="form-control"
              value={this.state. NO_of_Accommodation}
              onChange={this.onChangeNO_of_Accommodation}
              required
            />
            
          </div>
          <div className="form-group">
              
            <label>no of adults: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.NO_of_Adults}
              onChange={this.onChangeNO_of_Adults}
            />
            
          </div>
          <div className="form-group">
            <label>No of childs: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.NO_of_childs}
              onChange={this.onChangeNO_of_childs}
            />
            
          </div>
          <div className="visually-hidden">
            <label>price: </label>
            <input
              type="number"
              className="form-control"
              
              value={this.state.price = this.props.match.params.price * this.state. NO_of_Accommodation}
              onChange={this.onChangeprice}
            />
            
          </div>
          <h3 align="center">Last parice: Rs{this.state.price}/=</h3>
          <br />
 
          <div className="form-group">
            <input
              type="submit"
              value="Book Now"
              className="btn btn-primary"
              
            />
          </div>
        </form>
      </div>
      </div>
    )
    
  }

}