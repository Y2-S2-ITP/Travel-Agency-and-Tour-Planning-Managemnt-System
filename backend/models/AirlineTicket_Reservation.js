const mongoose=require("mongoose");
const atreservation=new mongoose.Schema({


From:{
    type:String,
    required:true
},

To:{
  type:String,
  required:true
},

Date:{
  type:String,
  required:true
},
Class:{
    type:String,
    required:true
},
Service_Provider:{
    type:String,
    required:true
},
   
Tickets:{
  type:String,
  required:true
},
User_Name:{
    type:String,
    required:true
}

});
const aTreservation=mongoose.model("AirlineTicket_Reservation",atreservation);
module.exports=aTreservation;