const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccommodationreSchema = new Schema({

    user_ID: {
        type : String,
        required: true
    },

    accommodation_ID: {
        type : String,
        required: true

    },
    DueDate : {
        type : String,
        required: true
    },
    Reserv_Date : {
        type : String,
        required: true
    },
   
    NO_of_Accommodation : {
        type : Number,
        required: true
    },
    NO_of_Adults : {
        type : Number,
        required: false
    },
    NO_of_childs : {
        type : Number,
        required: false
    },
    price : {
        type : Number,
        required: true
    },

   
})
const Accommodationreservation = mongoose.model("Accommoation_reservation",AccommodationreSchema);
module.exports=Accommodationreservation;