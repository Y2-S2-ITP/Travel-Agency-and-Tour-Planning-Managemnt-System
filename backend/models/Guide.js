const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Guide = new Schema({
    
    Guide_ID:{
        type:String,
        required:true
    },
    Full_Name:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    Experience:{
        type:String,
        required:true
    },
    Fee:{
        type:Number,
        required:true
    },
    Img:{
        type:String,
        required:true
    }
});

let guide = mongoose.model("Guide",Guide);
module.exports = guide;