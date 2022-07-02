const router = require("express").Router();
let tourPackageReservation = require("../models/model.tourPackageReservations");

//create package reservation
router.route("/createReservation").post((req,res) => {

    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
    const PackageID = req.body.PackageID;
    const packageStatus = req.body.packageStatus;
    const dueDate = (req.body.dueDate);
    const reservationDate = new Date();
    const noOfAdults = Number(req.body.noOfAdults);
    const noOfChilds = Number(req.body.noOfChilds);
    const paidAmount = Number(req.body.paidAmount);

    const newReservation = new tourPackageReservation({
        
        
        userName,
        userEmail,
        PackageID,
        packageStatus,
        dueDate,
        reservationDate,
        noOfAdults,
        noOfChilds,
        paidAmount
    })
    newReservation.save().then(()=>{
        res.json("Reservation Added")
    }).catch((err)=>{
        console.log(err);
    })

})
//View All
router.get('/getAllReservations',(req,res) => {
    tourPackageReservation.find().exec((err,posts) => {
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
//view Reservation
router.route("/viewReservations").get((req,res)=>{
    tourPackageReservation.find().then((reservations)=>{
        res.json(reservations)
    }).catch((err)=>{
        console.log(err);
    })
})
router.get("/get/:id",(req,res) => {
    let postID = req.params.id;

    tourPackageReservation.findById(postID,(err,post) =>{
        if(err) {
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({success:true,post});
    });
});


{/*}
//view specific reservation
router.route("/get/:id").get(async(req,res) => {
    let resID = req.params.id;
    const senddata = await tourPackageReservation.findById(resID).then((res) => {
        res.status(200).send({status: "Reservation fetched",error: err.message})

    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get reservation",error: err.message})

    })
})*/}

router.put('/UpdateReservation/:id',(req,res) => {
    tourPackageReservation.findByIdAndUpdate(
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

{/*}
//update reservations
router.route("/UpdateReservation/:id").put(async(req,res)=>{
    //fetch id for update reservation
    let resID = req.params.id;

    //D Structure
    const {reservationID,userID,PackageID,packageStatus,
        dueDate,reservationDate,noOfAdults,noOfChilds,
        paidAmount} = req.body;

    const UpdateReservation = {
        reservationID,
        userID,
        PackageID,
        packageStatus,
        dueDate,
        reservationDate,
        noOfAdults,
        noOfChilds,
        paidAmount
    } 
    const update = await tourPackageReservation.findByIdAndUpdate(resID,UpdateReservation)
    .then(() => {
        res.status(200).send({status: "Reservation Updated"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})*/}

router.delete('/deleteReservation/:id',(req,res) => {
    tourPackageReservation.findByIdAndRemove(req.params.id).exec((err,deletePackage) => {
        if(err) return res.status(400).json({
            message:"Delete Unsuccessfully",err
        });

        return res.json({
            message:"Delete Successfully",deletePackage
        });
    });
});


//delete reservation
router.route("/deleteReservation/:id").delete((async(req,res)=>{
    let resID = req.params.id;
    await tourPackageReservation.findByIdAndDelete(resID)
    .then(()=>{
        res.status(200).send({status: "Reservation Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete reservation",error: err.message});
    })
}))

module.exports = router;