const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Ground = new Schema({

    Ground_resourse_ID:{
        type:String,
        required:true
    },
    Ground_resourse_name:{
        type:String,
        required:true
    }

});

let ground = mongoose.model("Ground",Ground);
module.exports = ground;