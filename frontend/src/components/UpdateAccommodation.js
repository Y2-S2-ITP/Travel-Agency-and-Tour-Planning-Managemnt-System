import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";
 
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
      link: this.state.link,
    };
    console.log(newEditedaccommodation);
 
    // This will send a post request to update the data in the database.
    axios
      .put(
        "http://localhost:8000/accommodation/update/" + this.props.match.params.id,
        newEditedaccommodation
      )
      .then((res) => console.log(res.data));
      
 
    this.props.history.push("/admin_panel/accommodation_admin");
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

<br/><br/><br/><br/><br/>
      <div className="container">
        <h3 align="center">Update Accommodation details</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Remark ID: </label>
            <input
              type="Number"
              className="form-control"
              value={this.state.accommodation_ID}
              onChange={this.onChangeaccommodation_ID}
            />
          </div>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}
            />
            
          </div>
          <div className="form-group">
            <label>Location: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.location}
              onChange={this.onChangelocation}
            />
            
          </div>
          <div className="form-group">
            <label>Type  </label>
            <input
              type="text"
              className="form-control"
              value={this.state.type}
              onChange={this.onChangetype}
            />
            
          </div>
          <div className="form-group">
            <label>Price: </label>
            <input
              type="Number"
              className="form-control"
              value={this.state.price}
              onChange={this.onChangeprice}
            />
            
          </div>
          <div className="form-group">
            <label>Owner: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.owner}
              onChange={this.onChangeowner}
            />
            
          </div>
          <div className="form-group">
            <label>Phone: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangephone}
            />
            
          </div>
          <div className="form-group">
            <label>img link: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.link}
              onChange={this.onChangelink}
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
export default withRouter(Edit);