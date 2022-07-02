import React from 'react';
//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Car_Reservation_Header(){

    return(

        <div className="container">
            <header style={{backgroundColor:"lightskyblue"}}>
                <div className="p-1 mb-2 bg-dark text-light mt-3 h-60 shadow-sm text-center">
                    <h1 className="font-weight-bold">Airport Taxi Reservation</h1>
                </div>
            </header>
        </div>
        
    );

}