const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Guide_Reservation = new Schema({    

    No_of_Days:{
        type:Number,
        required:true
    },
    Tour_place:{
        type:String,
        required:true
    },
    Starting_point:{
        type:String,
        required:true
    },
    Guide_ID:{
        type:String,
        required:true
    },
    User_Name:{
        type:String,
        required:true
    }

});

let guide_reservation = mongoose.model("Guide_Reservation",Guide_Reservation);
module.exports = guide_reservation;