const express = require('express');
const TravelDoc = require('../models/TravelDoc');

const router = express.Router();

//save Travel doc

router.post('/TravelDoc/save',(req,res) =>{

    let NewTravelDoc = new TravelDoc(req.body);

    NewTravelDoc.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Travel document path saved successfully"
        });
    });

});

router.get('/TravelDoc',(req,res) =>{
    TravelDoc.find().exec((err,TravelDoc) =>{
        if(err){
           return res.status(400).json({
               error:err
           }); 
        }
        return res.status(200).json({
            success:true,
            existingTravelDoc:TravelDoc
        });
    });
});

//get specific Traveldoc

router.get("/TravelDoc/:id",(req,res) => {

    let TravelDocId = req.params.id;
    
    TravelDoc.findById(TravelDocId,(err,post) =>{
     if(err){
         return res.status(400).json({success:false, err});
     }

     return res.status(200).json({
         success:true,
         post
     });
    });
});


router.put('/TravelDoc/update/:id',(req,res)=>{
    TravelDoc.findByIdAndUpdate(
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

router.delete('/TravelDoc/delete/:id',(req,res) =>{
    TravelDoc.findByIdAndDelete(req.params.id).exec((err,deleteTravelDoc) =>{
        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete succesfull",deleteTravelDoc
        });
    });
});

module.exports = router;