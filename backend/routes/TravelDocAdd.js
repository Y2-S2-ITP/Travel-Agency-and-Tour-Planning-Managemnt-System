const express = require('express');
const TravelDocAdd = require('../models/TravelDocAdd');

const router = express.Router();

//save Inquriy

router.post('/TravelDocAdd/save',(req,res) =>{

    let NewTravelDocAdd = new TravelDocAdd(req.body);

    NewTravelDocAdd.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Travel document sent successfully"
        });
    });

});

router.get('/TravelDocAdd',(req,res) =>{
    TravelDocAdd.find().exec((err,TravelDocAdd) =>{
        if(err){
           return res.status(400).json({
               error:err
           }); 
        }
        return res.status(200).json({
            success:true,
            existingTravelDocAdd:TravelDocAdd
        });
    });
});

//get specific Traveldoc

router.get("/TravelDocAdd/:id",(req,res) => {

    let TravelDocAddId = req.params.id;
    
    TravelDocAdd.findById(TravelDocAddId,(err,post) =>{
     if(err){
         return res.status(400).json({success:false, err});
     }

     return res.status(200).json({
         success:true,
         post
     });
    });
});


router.put('/TravelDocAdd/update/:id',(req,res)=>{
    TravelDocAdd.findByIdAndUpdate(
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

router.delete('/TravelDocAdd/delete/:id',(req,res) =>{
    TravelDocAdd.findByIdAndDelete(req.params.id).exec((err,deleteTravelDocAdd) =>{
        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete succesfull",deleteTravelDocAdd
        });
    });
});

module.exports = router;