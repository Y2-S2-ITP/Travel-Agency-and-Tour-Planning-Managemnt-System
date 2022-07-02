import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";
 
class EditAcc extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);
    this.onChangeuser_ID  = this.onChangeuser_ID.bind(this);
    this.onChangeaccommodation_ID  = this.onChangeaccommodation_ID.bind(this);
    this.onChangeDueDate = this.onChangeDueDate.bind(this);
    this.onChangeReserv_Date = this.onChangeReserv_Date.bind(this);
    this.onChangeNO_of_Accommodation = this.onChangeNO_of_Accommodation.bind(this);
    this.onChangeNO_of_Adults = this.onChangeNO_of_Adults.bind(this);
    this.onChangeNO_of_childs = this.onChangeNO_of_childs.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
        user_ID: "",
        accommodation_ID: "",
        DueDate: "",
        Reserv_Date: "",
        NO_of_Accommodation: "",
        NO_of_Adults: "",
        NO_of_childs: "",
        price: "",
      records: [],
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:8000/accommodation_reservation/get/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          user_ID: response.data.user_ID,
          accommodation_ID: response.data.accommodation_ID,
          DueDate: response.data.DueDate,
          Reserv_Date: response.data.Reserv_Date,
          NO_of_Accommodation: response.data.NO_of_Accommodation,
          NO_of_Adults: response.data.owner,
          NO_of_childs: response.data.NO_of_childs,
          price: response.data.price,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  // These methods will update the state properties.
  onChangeuser_ID(e) {
    this.setState({
      user_ID: e.target.value,
    });
  }


  onChangeaccommodation_ID(e) {
    this.setState({
      accommodation_ID: e.target.value,
    });
  }
 
  onChangeDueDate(e) {
    this.setState({
      DueDate: e.target.value,
    });
  }
 
 
  onChangeReserv_Date(e) {
    this.setState({
      Reserv_Date: e.target.value,
    });
  }
  onChangeNO_of_Accommodation(e) {
    this.setState({
      NO_of_Accommodation: e.target.value,
    });
  }
  onChangeNO_of_Adults(e) {
    this.setState({
      NO_of_Adults: e.target.value,
    });
  }
  onChangeNO_of_childs(e) {
    this.setState({
      NO_of_childs: e.target.value,
    });
  }
  onChangeprice(e) {
    this.setState({
      price: e.target.value,
    });
  }
 
  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditedaccommodationReser = {
      user_ID: this.state.user_ID,
      accommodation_ID: this.state.accommodation_ID,
      DueDate: this.state.DueDate,
      Reserv_Date: this.state.Reserv_Date,
      NO_of_Accommodation: this.state.NO_of_Accommodation,
      NO_of_Adults: this.state.NO_of_Adults,
      NO_of_childs: this.state.NO_of_childs,
      price: this.state.price,
    };
    console.log(newEditedaccommodationReser);
 
    // This will send a post request to update the data in the database.
    axios
      .put(
        "http://localhost:8000/accommodation_reservation/update/" + this.props.match.params.id,
        newEditedaccommodationReser
      )
      .then((res) => console.log(res.data));
      
 
    this.props.history.push("/admin_panel/accommodation_admin/accommodation_servations");
  }
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/admin_panel/home"style={{color:"red "}}>Accommodation Management</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/admin_panel/accommodation_admin">All Accommadations <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin_panel/accommodation_admin/addnew">Add new Accommodation</a>
      </li>
     
     
    </ul>

  </div>
</nav>


      <div className="container">
        <h3 align="center">Update Accommodation reservation details</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>User ID: </label>
            <input
              type="Number"
              className="form-control"
              value={this.state.user_ID}
              onChange={this.onChangeuser_ID}
            />
          </div>
          <div className="form-group">
            <label>Accommodation ID: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.accommodation_ID}
              onChange={this.onChangeaccommodation_ID}
            />
          </div>
          <div className="form-group">
            <label>reserv date: </label>
            <input
              type="date"
              className="form-control"
              value={this.state.Reserv_Date}
              onChange={this.onChangeReserv_Date}
            />
            
          </div>
          <div className="form-group">
            <label>due date: </label>
            <input
              type="date"
              className="form-control"
              value={this.state.DueDate}
              onChange={this.onChangeDueDate}
            />
            
          </div>
          <div className="form-group">
            <label>no of rooms:  </label>
            <input
              type="Number"
              className="form-control"
              value={this.state.NO_of_Accommodation}
              onChange={this.onChangeNO_of_Accommodation}
            />
            
          </div>
          <div className="form-group">
            <label>no of adults: </label>
            <input
              type="Number"
              className="form-control"
              value={this.state.NO_of_Adults}
              onChange={this.onChangeNO_of_Adults}
            />
            
          </div>
          <div className="form-group">
            <label>no of childs: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.NO_of_childs}
              onChange={this.onChangeNO_of_childs}
            />
            
          </div>
          <div className="form-group">
            <label>price: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.price}
              onChange={this.onChangeprice}
            />
            
          </div>
          
          <br />
 
          <div className="form-group">
            <input
              type="submit"
              value="Update Record"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
      </div>
    );
  }









}
export default withRouter(EditAcc);