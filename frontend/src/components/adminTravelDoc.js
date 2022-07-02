import React, { Component } from 'react'
import "../style/admin.css";
import "../style/adminTravelDoc.css"
import axios from 'axios';
import Imglogo from "../images/logo.png";
import HouseIcon from '@material-ui/icons/House';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ExploreIcon from '@material-ui/icons/Explore';
import DescriptionIcon from '@material-ui/icons/Description';
import SecurityIcon from '@material-ui/icons/Security';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';




export default class AdminTravelDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TravelDoc: []
    };
  }

  componentDidMount() {
    this.retrieveTravelDoc();
  }

  retrieveTravelDoc() {
    axios.get("http://localhost:8000/TravelDoc").then(res => {
      if (res.data.success) {
        this.setState({
          TravelDoc: res.data.existingTravelDoc
        });

        console.log(this.state.TravelDoc)
      }
    })
  }

  render() {
    return (
      <div>
        <div className="display-table">
          <div className="row display-table-row">
            <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
              <div className="logo">
                <a hef="home.html"><img src={Imglogo} alt="merkery_logo" className="hidden-xs hidden-sm" />

                </a>

              </div>
              <h3 style={{ color: "white" }}><b>Admin Panel</b></h3>
              <div className="navi">
                <ul>
                  <li ><a href="#"><HouseIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Accommadation</span></a></li>
                  <li><a href="#"><ConfirmationNumberIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ticket</span></a></li>
                  <li><a href="#"><LocalTaxiIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Ground</span></a></li>
                  <li><a href="/adminTourHome"><ExploreIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Tour Package</span></a></li>
                  <li><a href="/admintravelDoc"><DescriptionIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Travel Document</span></a></li>
                  <li><a href="#"><SecurityIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Insurance</span></a></li>
                  <li><a href="#"><EventIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;Event</span></a></li>
                  <li><a href="#"><GroupIcon style={{ fontSize: 30, color: "#5584FF" }} /><span className="hidden-xs hidden-sm">&nbsp;&nbsp;User MAnagement</span></a></li>

                </ul>
              </div>
            </div>
            <div>
            <div className="buttonset">
            <a href="/adminTravelDocApplication">
            <button class="button button3">Application Details</button>
            </a>
            <br/><br/>
            <a href="/adminTravelDocAdd">
            <button class="button button3">Users Travel Documents</button>
            </a>
            <br/><br/>
            <a href="/adminTravelDocInquriy">
            <button class="button button3">Inquries</button>
            </a>
            <br/><br/>
              </div>
            </div>
          </div>

        </div>



      </div>
    )
  }
}
