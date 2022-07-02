const router = require("express").Router();
let insuranceReservation = require("../models/model.InsuranceReservations");

//create reservation
router.route("/createInsuranceReservation").post((req,res) => {
    const reservationID = req.body.reservationID;
    const userID = req.body.userID;
    const insuranceID = req.body.insuranceID;
    const dueDate = req.body.dueDate;
    const reserveDate = req.body.reserveDate;
    const price = Number(req.body.price);

    const newInsuranceReservation = new insuranceReservation({
        reservationID,
        userID,
        insuranceID,
        dueDate,
        reserveDate,
        price
    })
    newInsuranceReservation.save().then(()=>{
        res.json("Reservation Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//view Reservation
router.route("/viewInsuranceReservations").get((req,res)=>{
    insuranceReservation.find().then((reservations)=>{
        res.json(reservations)
    }).catch((err)=>{
        console.log(err);
    })
})


router.get("/get/:id",(req,res) => {
    let postID = req.params.id;

    insuranceReservation.findById(postID,(err,post) =>{
        if(err) {
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({success:true,post});
    });
});


//update reservations
router.route("/UpdateInsuranceReservation/:id").put(async(req,res)=>{
    
    let resID = req.params.id;

    
    const {reservationID,userID,insuranceID,
        dueDate,reserveDate,
        price} = req.body;

    const UpdateReservation = {
        reservationID,
        userID,
        insuranceID,
        dueDate,
        reserveDate,
        price
    } 
    const update = await insuranceReservation.findByIdAndUpdate(resID,UpdateReservation)
    .then(() => {
        res.status(200).send({status: "Reservation Updated"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete reservation
router.route("/deleteInsuranceReservation/:id").delete((async(req,res)=>{
    let resID = req.params.id;
    await insuranceReservation.findByIdAndDelete(resID)
    .then(()=>{
        res.status(200).send({status: "Reservation Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete reservation",error: err.message});
    })
}))

module.exports = router;