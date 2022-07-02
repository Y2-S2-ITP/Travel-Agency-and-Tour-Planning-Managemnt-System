const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();
// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

//oshen part
const TravelDocRoutes = require('./routes/TravelDoc');
const TravelDocInquriyRoutes = require('./routes/TravelDocInquriy');
const TravelDocAdd = require('./routes/TravelDocAdd');

//yasiru part
const TourPackageRouter = require("./routes/routes.tourPackage.js");
const TourPackageReservationRouter = require("./routes/routes.tourPackageReservations.js");

//nethu nipuna part
const accommodationRouter= require("./routes/accommodations.js");
const accommodation_reservation_Router=require("./routes/accommodation_reservation");

//Gayashan
let ground = require("./routes/grounds.js");
let car = require("./routes/cars.js");
let guide = require("./routes/guides.js");
let carres = require("./routes/car_reservations.js");
let guideres = require("./routes/guide_reservations.js");

//sachini part
let airlineticket =require("./routes/airline_tickets.js");
let busticket=require("./routes/bus_tickets.js");
let railwayticket=require("./routes/railway_tickets.js");
let btreservation=require("./routes/busticket_reservations.js");
let ttreservation=require("./routes/trainticket_reservation.js");
let atreservation=require("./routes/airlineticket_reservation.js");
let tickettypes=require("./routes/tickettypes.js");
let eventticket=require("./routes/event_reservations.js");
let Payment = require("./routes/payments.js")

//himanka
const InsuranceTypeRouter = require("./routes/routes.InsuranceType.js");
const InsuranceReservationRouter = require("./routes/routes.InsuranceReservations.js");


// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
     
    })
    .then(() => console.log("DB Connected"));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

//oshen parts
app.use(TravelDocRoutes);
app.use(TravelDocInquriyRoutes);
app.use(TravelDocAdd);

//yasiru part
app.use("/tourPackage",TourPackageRouter);
app.use("/tourPackageReservation",TourPackageReservationRouter);

//nethu nipuna part
app.use("/accommodation",accommodationRouter);
app.use("/accommodation_reservation",accommodation_reservation_Router);

//Gayashan Part
app.use("/ground",ground);
app.use("/car",car);
app.use("/guide",guide);
app.use("/carreservation",carres);
app.use("/guidereservation",guideres);


//sachini part
app.use("/admin/airticket",airlineticket);
app.use("/admin/busticket",busticket);
app.use("/admin/trainticket",railwayticket);
app.use("/reservation/busticket",btreservation);
app.use("/reservation/airticket",atreservation);
app.use("/reservation/trainticket",ttreservation);
app.use("/tticket",tickettypes);
app.use("/reservation/eventticket",eventticket);
app.use("/Payment",Payment);

//himanka
app.use("/InsuranceType",InsuranceTypeRouter);
app.use("/InsuranceReservation",InsuranceReservationRouter);

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
