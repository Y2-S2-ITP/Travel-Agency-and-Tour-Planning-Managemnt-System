const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accommodationSchema = new Schema({
    accommodation_ID : {
        type : Number,
        required: true
    },
    name : {
        type : String,
        required: true
    },
 
    location : {
        type : String,
        required: true

    },
    type : {
        type : String,
        required: true
    },
    price : {
        type : Number,
        required: true
    },
    owner : {
        type : String,
        required: true
    },
    phone : {
        type : Number,
        required: true
    },
    link : {
        type : String,
        required: true
    }
   
})
const Accommodation = mongoose.model("Accommodation",accommodationSchema);
module.exports=Accommodation;