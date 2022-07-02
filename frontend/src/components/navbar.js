import React from 'react';
import "../style/navbar.css";
import Button from '@material-ui/core/Button';

function navbar() {


    return (
        <div className="navbar">

            <Button  ><a href="/" style={{ textDecoration: "none" }}>Home</a></Button>
            <Button  ><a href="/accommodation/main" style={{ textDecoration: "none" }}>Stay</a></Button>
            <Button  ><a href="/ticketManagement" style={{ textDecoration: "none" }}>Tickets</a></Button>
            <Button  ><a href="/ground" style={{ textDecoration: "none" }}>Ground Reservations</a></Button>
            <Button  ><a href="/tour" style={{ textDecoration: "none" }}>Packages</a></Button>
            <Button  ><a href="/Information" style={{ textDecoration: "none" }}>Documents</a></Button>
            <Button  ><a href="/Insurance" style={{ textDecoration: "none" }}>Insurence</a></Button>
            <Button  ><a href="#" style={{ textDecoration: "none" }}>Events</a></Button>
        </div>

    );
}
export default navbar

