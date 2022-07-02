const mongoose=require("mongoose");

const busticket=new mongoose.Schema({

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
    Distance:{
        type:String,
        required:true
    },
    Ticket_Fee:{
        type:String,
        required:true
    },
    Begging_Time:{
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
    


});
const bticket=mongoose.model("Bus_Ticket",busticket);
module.exports=bticket;