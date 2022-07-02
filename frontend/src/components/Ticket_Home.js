import React from 'react';
import '../style/Ticket_Home.css';
import Train from "../img/train.jpg";
import airplane from "../img/airplane.jpg";
import Bus from "../img/Bus.jpg";
import ehome from "../img/ehome.gif";


import { Link } from "react-router-dom";

export default function TicketHome() {

    return (

        <div class="container-fluid bg-trasparent my-4 p-3" style={{ position: 'sticky' }}>
            <div className="mt-2"></div>
            <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3 ">
                <div class="col">
                    <center>   <h3 className="text-dark fw-bold"> Train Ticket</h3> </center>
                    <div class="card h-90 shadow-sm  mt-3"style={{background:"lightseagreen"}}> <img src={Train} class="card-img-top" alt="..." />
                        <div class="card-body"style={{background:"lightblue"}}>
                            <div class="d-grid gap-2 my-4"> <Link to="/train" class="btn btn-success fw-bold"style={{ fontSize: "20px" }}>Book Ticket</Link> </div>
                        </div>

                    </div>
                    <div></div>
                    <div style={{ textAlign: 'justify' }}>
                        <h5 className="text-dark fw-bold mt-5">You can book  Train ticket easily. You can see  train distinations and starting points as well as arrival time and departure time.Enjoy our service.</h5>
                    </div>
                </div>
                <div class="col">
                    <center>     <h3 className="text-dark fw-bold">     Airline Ticket</h3></center>
                    <div class="card h-90 shadow-sm mt-3"style={{background:"lightseagreen"}}> <img src={airplane} class="card-img-top" alt="..." />
                        <div class="card-body"style={{background:"lightblue"}}>
                            <div class="d-grid gap-2 my-4"> <Link to="/airline" class="btn btn-success fw-bold"style={{ fontSize: "20px" }}>Book Ticket</Link> </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'justify' }}>
                        <h5 className="text-dark mt-5 fw-bold ">You can book  Airline ticket easily. You can see  airline distinations and starting points as well as arrival time and departure time.Enjoy our service.</h5>
                    </div>
                </div>
                <div class="col">
                    <center>  <h3 className="text-dark fw-bold"> Bus Ticket</h3></center>
                    <div class="card h-90 shadow-sm mt-3"style={{background:"lightseagreen"}}> <img src={Bus} class="card-img-top " alt="..." />
                        <div class="card-body"style={{background:"lightblue"}}>
                            <div class="d-grid gap-2 my-4 fw-bold"> <Link to="/bus" class="btn btn-success fw-bold"style={{ fontSize: "20px" }}>Book Ticket</Link> </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'justify' }}>
                        <h5 className="text-dark mt-5 fw-bold ">You can book  Bus ticket easily. You can see  bus distinations and starting points as well as arrival time and departure time.Enjoy our service.</h5>
                    </div>
                </div>
                <div class="col">
                    <center> <h3 className="text-dark fw-bold"> Event Ticket</h3></center>
                    <div class="card h-90 shadow-sm mt-3"style={{background:"lightseagreen"}}> <img src={ehome} class="card-img-top" alt="..." />
                        <div class="card-body"style={{background:"lightblue"}}>
                            <div class="d-grid gap-2 my-4"> <Link to="/event" class="btn btn-success fw-bold"style={{ fontSize: "20px" }}>Book Ticket</Link> </div>
                           
                        </div>
                    </div>
                    <div style={{ textAlign: 'justify' }}>
                        <h5 className="text-dark mt-5 fw-bold">You can book  Event ticket easily. You can see location and starting time.Enjoy our service.</h5>
                    </div>
                </div>
                <div className="mt-5"></div>
            </div>
            
            
            <div className="mt-5"></div>
        </div>
       

    );

}