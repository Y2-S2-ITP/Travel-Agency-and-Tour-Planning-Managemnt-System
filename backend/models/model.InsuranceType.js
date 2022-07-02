const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const insuranceTypeSchema = new Schema({
    insuranceID : {
        type : String,
        required : true
    },
    insuranceType : {
        type : String,
        required : true
    },
    companyName : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    
    ImageLink : {
        type : String,
        required:true
    }
    
})

const InsuranceType = mongoose.model("InsuranceType",insuranceTypeSchema);

module.exports = InsuranceType;