const mongoose=require("mongoose");
const btreservation=new mongoose.Schema({


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
const bTreservation=mongoose.model("BusTicket_Reservation",btreservation);
module.exports=bTreservation;