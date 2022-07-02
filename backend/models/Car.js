const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Car = new Schema({
    Car_ID:{
        type:String,
        required:true
    },
    Car_Type:{
        type:String,
        required:true
    },
    Brand:{
        type:String,
        required:true
    },
    Model:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    Cost_per_KM:{
        type:Number,
        required:true
    },
    Img:{
        type:String,
        required:true
    }
});

let car = mongoose.model("Car",Car);
module.exports = car;