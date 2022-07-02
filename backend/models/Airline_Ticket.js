const mongoose = require("mongoose");

const airline=new mongoose.Schema({

Ticket_Type:{
    type:String,
    required:true
},
From:{
    type:String,
    required:true
},
To:{
    type:String,
    required:true
},
Flight_Number:{
    type:String,
    required:true
},
Service_Provider:{
    type:String,
    required:true
},

Departure_Time:{
    type:String,
    required:true
},
Arrival_Time:{
    type:String,
    required:true
},
Date:{
    type:String,
    required:true
},
No_Of_Seats:{
    type:String,
    required:true
},
Ticket_Fee:{
    type:String,
    required:true
}
});
const aticket=mongoose.model("Airline_Ticket",airline);
module.exports=aticket;