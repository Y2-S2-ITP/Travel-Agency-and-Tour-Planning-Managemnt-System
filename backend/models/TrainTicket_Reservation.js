const mongoose=require("mongoose");
const ttreservation=new mongoose.Schema({


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
Tickets:{
  type:Number,
  required:true
},
User_Name:{
  type:String,
  required:true
}


});
const tTreservation=mongoose.model("TrainTicket_Reservation",ttreservation);
module.exports=tTreservation;