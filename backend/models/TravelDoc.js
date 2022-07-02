const mongoose = require('mongoose');

const TravelDocSchema = new mongoose.Schema({

     country:{
         type:String,
         required: true
     },

     file_location_URL:{
         type:String,
         required:true
     },

     Updated_Date:{
         type:String,
         required:true
     }


});

module.exports = mongoose.model('TarvelDoc',TravelDocSchema);