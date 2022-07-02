const router = require("express").Router();
const { json } = require("body-parser");
let tourpackage = require("../models/model.tourPackage");

//create package
router.route("/addPackage").post((req,res) => {
     
    const packageID = req.body.packageID;
    const packageName = req.body.packageName;
    const PackageType = req.body.PackageType;
    const NoOfDays = Number(req.body.NoOfDays);
    const MealPlan = req.body.MealPlan;
    const Transpotation = req.body.Transpotation;
    const Activities = req.body.Activities;
    const LocationList = req.body.LocationList;
    const PriceForAdult = Number(req.body.PriceForAdult);
    const PriceForChild = Number(req.body.PriceForChild);
    const ImageLink = req.body.ImageLink;



    const newPackage = new tourpackage({
        packageID,
        packageName,
        PackageType,
        NoOfDays,
        MealPlan,
        Transpotation,
        Activities,
        LocationList,
        PriceForAdult,
        PriceForChild,
        ImageLink
    })

    newPackage.save().then(() => {
        res.json("Package Added")
    }).catch((err) => {

        console.log(err);
    })
})
{/*
router.get('/ViewPackage',(req,res) => {
    tourpackage.find().exec((err,posts) => {
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
*/}
//View All
router.get('/getAll',(req,res) => {
    tourpackage.find().exec((err,posts) => {
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

//view package
router.route("/ViewPackage").get((req,res) => {
    
    tourpackage.find().then((packages) => {
        res.json(packages)
    }).catch((err)=>{
        console.log(err);
    })
})
//
router.get("/get/:id",(req,res) => {
    let postID = req.params.id;

    tourpackage.findById(postID,(err,post) =>{
        if(err) {
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({success:true,post});
    });
});
/*
//view specific package
router.route("/get/:id").get(async (req,res) => {
    let pkdID = req.params.id;
    const senddata = await tourpackage.findById(pkdID).then((package) => {
        res.status(200).send({status: "Package fetched", package})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get package",error: err.message})
    })
})
*/

//update Package
router.put('/UpdatePackage/:id',(req,res) => {
    tourpackage.findByIdAndUpdate(
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


/*
//Update package
router.route("/UpdatePackage/:id").put(async(req,res) => {
    
    //fetch id for update package
    let pkdID = req.params.id;

    //D Structure
    const {packageID,packageName,PackageType,NoOfDays,MealPlan,Transpotation,
        Activities,LocationList,PriceForAdult,PriceForChild} = req.body;  

    const updatePAckage = {
        packageID,
        packageName,
        PackageType,
        NoOfDays,
        MealPlan,
        Transpotation,
        Activities,
        LocationList,
        PriceForAdult,
        PriceForChild
    }
    const update = await tourpackage.findByIdAndUpdate(pkdID,updatePAckage)
    .then(()=>{

    res.status(200).send({status: "Package Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
}) */

//delete Package
router.delete('/deletePackage/:id',(req,res) => {
    tourpackage.findByIdAndRemove(req.params.id).exec((err,deletePackage) => {
        if(err) return res.status(400).json({
            message:"Delete Unsuccessfully",err
        });

        return res.json({
            message:"Delete Successfully",deletePackage
        });
    });
});


{/*
//delete Package
router.route("/deletePackage/:id").delete(async(req,res)=>{
    let pkdID = req.params.id;
    await tourpackage.findByIdAndDelete(pkdID)
    .then(()=>{
        res.status(200).send({status: "Package Deleted"});

    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete package",error: err.message});

    })
})
*/}

module.exports = router;