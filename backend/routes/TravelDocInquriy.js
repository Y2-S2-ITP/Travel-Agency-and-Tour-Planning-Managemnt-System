const express = require('express');
const TravelDocInquriy = require('../models/TravelDocInquriy');

const router = express.Router();

//save Inquriy

router.post('/TravelDocInquriy/save',(req,res) =>{

    let NewTravelDocInquriy = new TravelDocInquriy(req.body);

    NewTravelDocInquriy.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Inquiry saved successfully"
        });
    });

});

router.get('/TravelDocInquriy',(req,res) =>{
    TravelDocInquriy.find().exec((err,TravelDocInquriy) =>{
        if(err){
           return res.status(400).json({
               error:err
           }); 
        }
        return res.status(200).json({
            success:true,
            existingTravelDocInquriy:TravelDocInquriy
        });
    });
});

//get specific Traveldoc

router.get("/TravelDocInquriy/:id",(req,res) => {

    let TravelDocInquriyId = req.params.id;
    
    TravelDocInquriy.findById(TravelDocInquriyId,(err,post) =>{
     if(err){
         return res.status(400).json({success:false, err});
     }

     return res.status(200).json({
         success:true,
         post
     });
    });
});


router.put('/TravelDocInquriy/update/:id',(req,res)=>{
    TravelDocInquriy.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Travel Document succesfully"
            });
        }
    );
});

router.delete('/TravelDocInquriy/delete/:id',(req,res) =>{
    TravelDocInquriy.findByIdAndDelete(req.params.id).exec((err,deleteTravelDocInquriy) =>{
        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete succesfull",deleteTravelDocInquriy
        });
    });
});

module.exports = router;