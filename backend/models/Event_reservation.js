const mongoose=require("mongoose");

const eventreservation=new  mongoose.Schema({


Event_Name:{

    type:String,
    required:true

},
Location:{
   type:String,
   required:true
}, 

Date:{
   type:String,
   required:true
},

No_Of_Tickets:{
  type:String,
  required:true

},
User_Name:{
   type:String,
   required:true
 
 }

});
const eticket=mongoose.model("Event_reservation",eventreservation);
module.exports=eticket;