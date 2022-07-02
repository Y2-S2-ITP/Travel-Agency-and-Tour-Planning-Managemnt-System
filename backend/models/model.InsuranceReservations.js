const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const insuranceReservationSchema = new Schema({
    /*reservationID : {
        type : String,
        required : true
    },
    userID : {
        type : String,
        required : true
    },*/
    insuranceID : {
        type : String,
        required : true
    },
    
    dueDate : {
        type : String,
        required: true
      //  type : Date,
 
    },
    reserveDate : {
        type : String,
        required: true
      //  type : Date,
      //  default : Date.now
    },
    
    price : {
        type : String,
        required : true
    }
}) 

const InsuranceReservation = mongoose.model("InsuranceReservation",insuranceReservationSchema);
module.exports = InsuranceReservation;