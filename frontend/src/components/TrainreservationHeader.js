import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function TrainReservationHeader() {

    return (
        <div className="container">
             <div className="mt-4"></div>
            <header style={{backgroundColor:"lightskyblue"}} >
               
                <div className="p-2 mb-3 bg-dark text-light mt-3  h-150  shadow-sm">
                    <center>
                        <h1 className="display-6 fw-bold">Train  Reservation</h1>
                    </center>
                </div>
            </header>

        </div>
    );

}