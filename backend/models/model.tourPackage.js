const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create tour packages schema
const tourPackageSchema = new Schema({
    packageID : {
        type : String,
        required : true
    },
    packageName : {
        type : String,
        required : true
    },
    PackageType : {
        type : String,
        required : true
    },
    NoOfDays : {
        type : Number,
        required : true
    },
    MealPlan : {
        type : String,
        required : true
    },
    Transpotation : {
        type : String,
        required : true
    },
    Activities : {
        type : String,
        required : true
    },
    LocationList : {
        type : String,
        required : true
    },
    PriceForAdult : {
        type : Number,
        required : true
    },
    PriceForChild : {
        type : Number,
        required : true
    },
    ImageLink : {
        type : String,
        required:true
    }
    
})

const TourPackage = mongoose.model("TourPackage",tourPackageSchema);

module.exports = TourPackage;