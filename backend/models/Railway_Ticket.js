const mongoose=require("mongoose");

const railwayticket=new mongoose.Schema({

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
const rticket=mongoose.model("Railway_Ticket",railwayticket);
module.exports=rticket;