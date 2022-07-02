import React from 'react';


export default function AdminButtons() {

    return (
        <div className="container ">
         
        <center><div className="text-dark fw-bold mt-2"style={{ fontSize: "40px"}}>Ticket Reservation Admin </div></center>
        <div class="d-grid gap-2 col-4 mx-auto mt-5">
         
      <a href="/abus"><button class="btn btn-success mt-5 fw-bold form-control" type="button"style={{ fontSize: "20px" }}>  Insert Bus Page</button></a>
      <a href="/atrain"><button class="btn btn-success  mt-4  fw-bold form-control" type="button"style={{ fontSize: "20px" }}>Insert Train Page</button></a>
      <a href="/aairline"><button class="btn btn-success mt-4 fw-bold form-control" type="button"style={{ fontSize: "20px" }}>Insert Airline Page</button></a>
      <a href="/rbus"><button class="btn btn-warning  mt-4 fw-bold form-control" type="button"style={{ fontSize: "20px" }}> Bus Reservation Page</button></a>
      <a href="/rtrain">  <button class="btn btn-warning mt-4 fw-bold form-control" type="button"style={{ fontSize: "20px" }}>Train Reservation Page</button></a>
      <a href="/rairline">  <button class="btn btn-warning mt-4 fw-bold form-control" type="button"style={{ fontSize: "20px" }}>Airline Reservation Page</button></a>
      <a href="/revent"> <button class="btn btn-warning mt-4 fw-bold form-control" type="button"style={{ fontSize: "20px" }}>Event Reservation Page</button></a>
      </div>
       </div>
        
     
    );

}