import React from 'react'
//import "../css/reservation_of_ground.css";

export default function ReservationOfGroundBody() {

    return (

        <div class="container" style={{ position: "sticky" }}>
            <div class="row">
                <div class="col" style={{ marginRight: "75px", marginLeft: "70px" }}>
                    <h2 style={{ marginTop: "50px", textAlign: "center" }}>Airport Taxi</h2>
                    <div class="card p-1" style={{ height: "330px", paddingTop: "20px", marginBottom: "70px" }}> <img src="https://media.istockphoto.com/vectors/happy-family-trip-and-taxi-service-illustration-vector-id1151360678?k=20&m=1151360678&s=612x612&w=0&h=72hkXZXthPl65ofu2rcjh2CXKlFiDWR4viPqXhUxg64=" class="card-img-top" alt="..." />
                        <div class="p-1">
                            <center>
                                <div> <a href="/ground/airporttaxi" class="btn btn-danger" style={{ width: "250px", fontSize: "16px",marginTop:"45px" }}>Click to book</a> </div>
                                <div><p className="fw-bold text-center mt-4" style={{ fontSize: "14px"}}>Reservation of your Airport Taxi</p></div>
                            </center>
                        </div>
                    </div>
                </div>
                <div class="col" style={{ marginRight: "75px", marginLeft: "70px" }}>
                    <h2 style={{ marginTop: "50px", textAlign: "center" }}>Car</h2>
                    <div class="card p-1" style={{ height: "330px", paddingTop: "20px", marginBottom: "70px" }}> <img src="https://media.istockphoto.com/vectors/happy-family-trip-and-taxi-service-illustration-vector-id1151360678?k=20&m=1151360678&s=612x612&w=0&h=72hkXZXthPl65ofu2rcjh2CXKlFiDWR4viPqXhUxg64=" class="card-img-top" alt="..." />
                        <div class="p-1">
                            <center>
                                <div> <a href="/ground/car" class="btn btn-danger" style={{ width: "250px", fontSize: "16px",marginTop:"45px" }}>Click to book</a> </div>
                                <div><p className="fw-bold text-center mt-4" style={{ fontSize: "14px" }}>Reservation of your Car</p></div>
                            </center>
                        </div>
                    </div>
                </div>
                <div class="col" >
                    <h2 style={{ marginTop: "50px", textAlign: "center" }}>Guide</h2>
                    <div class="card p-1" style={{ height: "330px", paddingTop: "20px", marginBottom: "70px"}}> <img src="https://media.istockphoto.com/vectors/happy-family-trip-and-taxi-service-illustration-vector-id1151360678?k=20&m=1151360678&s=612x612&w=0&h=72hkXZXthPl65ofu2rcjh2CXKlFiDWR4viPqXhUxg64=" class="card-img-top" alt="..." />
                        <div class="p-1">
                            <center>
                                <div> <a href="/ground/guide" class="btn btn-danger" style={{ width: "250px", fontSize: "16px",marginTop:"45px" }}>Click to book</a> </div>
                                <div><p className="fw-bold text-center mt-4" style={{ fontSize: "14px" }}>Reservation of your Travel Guide</p></div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

{/*https://khushitaxiservice.com/wp-content/uploads/2021/01/AA-1.jpg
    "https://static8.depositphotos.com/1030387/806/v/450/depositphotos_8069143-stock-illustration-family-trip.jpg
 */}