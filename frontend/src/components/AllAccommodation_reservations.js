import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";
 
const Record = (props) => (
  <tr>
    <td>{props.record._id}</td>
    <td>{props.record.user_ID}</td>
    <td>{props.record.accommodation_ID}</td>
    <td>{props.record.DueDate}</td>
    <td>{props.record.Reserv_Date}</td>
    <td>{props.record.NO_of_Accommodation}</td>
    <td>{props.record.NO_of_Adults}</td>
    <td>{props.record.NO_of_childs}</td>
    <td>{props.record.price}</td>
    <td>
      <Link to={"/admin_panel/reservation/update/" + props.record._id}>Edit</Link> |
      <a
        href="/admin_panel/accommodation_admin/accommodation_servations"
        onClick={() => {
          props.deleteRecord(props.record._id);
          this.props.history.push("/admin_panel/accommodation_admin");
        }}
      >
        Delete
      </a>
    </td>
  </tr>
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
      .get("http://localhost:8000/accommodation_reservation/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("http://localhost:8000/accommodation_reservation/delete/" + id).then((response) => {
      console.log(response.data);
    });
 
    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }
 
  // This method will map out the users on the table
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
 
  // This following section will display the table with the records of individuals.
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
        <h3>Accommodation Reservation Record List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Resrvation_ID </th>
              <th>User_ID </th>
              <th>Accommodation_ID </th>
              <th>Due date</th>
              <th>reserv date</th>
              <th>no of accommodations</th>
              <th>no fo adults</th>
              <th>no of childs</th>
              <th>price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
      </div>
    );
  }
}
