const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create tour package reservation schema]
const tourPackageReservation = new Schema({


    userName : {
        type : String,
        required: true
    },
    userEmail : {
        type : String,
        required : true
    },
    PackageID : {
        type : String,
        required : true
    },
    packageStatus : {
        type : String,
        required : true
    },
    dueDate : {
        type : String,
 
    },
    reservationDate : {
        type : String,
        default : Date.now
    },
    noOfAdults : {
        type : Number,

    },
    noOfChilds : {
        type : Number
   
    },
    paidAmount : {
        type : Number
   
    }
}) 

const TourPackageReservation = mongoose.model("TourPackageReservation",tourPackageReservation);
module.exports = TourPackageReservation;