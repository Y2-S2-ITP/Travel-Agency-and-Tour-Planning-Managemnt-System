const mongoose=require("mongoose");

const ttype=new mongoose.Schema({

    Ticket_Type_ID:{

        type:String,
        required:true
    },
    Ticket_Type:{
        type:String,
        required:true
    }
});
const Ttype=mongoose.model("TicketType",ttype);
module.exports=Ttype;