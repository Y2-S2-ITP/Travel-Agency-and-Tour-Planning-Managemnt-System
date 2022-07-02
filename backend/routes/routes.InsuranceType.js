const router = require("express").Router();
const { json } = require("body-parser");
let insurancetype = require("../models/model.InsuranceType");


router.route("/addInsuranceType").post((req,res) => {
     
    const insuranceID = req.body.insuranceID;
    const insuranceType = req.body.insuranceType;
    const companyName = req.body.companyName;
    const price = Number(req.body.price);
    const description = req.body.description;
    const ImageLink = req.body.ImageLink;



    const newInsuranceType = new insurancetype({
        insuranceID,
        insuranceType,
        companyName,
        price,
        description,
        ImageLink
    })

    newInsuranceType.save().then(() => {
        res.json("Insurance Type Added")
    }).catch((err) => {

        console.log(err);
    })
})


//View All Insurance
router.get('/viewAllInsuranceType',(req,res) => {
    insurancetype.find().exec((err,posts) => {
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//view all Insurance
router.route("/viewInsuranceType").get((req,res) => {
    
    insurancetype.find().then((packages) => {
        res.json(packages)
    }).catch((err)=>{
        console.log(err);
    })
})
//
router.get("/get/:id",(req,res) => {
    let postID = req.params.id;

    insurancetype.findById(postID,(err,post) =>{
        if(err) {
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({success:true,post});
    });
});


//update Package
router.put('/UpdateTnsuranceType/:id',(req,res) => {
    insurancetype.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) => {
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


//delete Package
router.delete('/deleteInsuranceType/:id',(req,res) => {
    insurancetype.findByIdAndRemove(req.params.id).exec((err,deleteInsuranceType) => {
        if(err) return res.status(400).json({
            message:"Delete Unsuccessfully",err
        });

        return res.json({
            message:"Delete Successfully",deleteInsuranceType
        });
    });
});


module.exports = router;