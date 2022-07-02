const mongoose=require("mongoose");

const Payment=new mongoose.Schema({

    Card_Holder_Name:{

        type:String,
        required:true
    },
    Card_Number:{

        type:String,
        required:true
    },
    Expiary_date:{
        type:String,
        required:true
    },
    Card_CVV:{
        type:String,
        required:true
    },
    


});
const ppayment=mongoose.model("payment",Payment);
module.exports=ppayment;