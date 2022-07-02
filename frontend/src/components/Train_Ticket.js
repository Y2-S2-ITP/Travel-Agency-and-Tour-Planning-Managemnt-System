import React from 'react';

export default function TicketHeader() {

    return (
        <div className="container">
             <div className="mt-3"></div>
            <header style={{backgroundColor:"lightskyblue"}}>
                <div className="p-2 mb-3  text-light mt-3  h-60 shadow-sm "style={{backgroundColor:"lightseagreen"}}>
                    <h1 className="display-5" style={{ fontWeight: "bold"}}><center>Train Ticket Reservation</center></h1>
                </div>
            </header>

        </div>
    );

}