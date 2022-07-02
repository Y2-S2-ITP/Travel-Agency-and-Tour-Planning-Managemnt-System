const mongoose = require('mongoose');

const TravelDocInquriySchema = new mongoose.Schema({

     Subject_type:{
         type:String,
         required: true
     },

     Phone_no:{
         type:String,
         required:true
     },

     Name:{
         type:String,
         required:true
     },

     Message_Inquriy:{
        type:String,
        required:true
    }



});

module.exports = mongoose.model('TravelDocInquriy',TravelDocInquriySchema);