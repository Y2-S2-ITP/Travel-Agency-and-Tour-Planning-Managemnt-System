const router =require("express").Router();
let Accommodation_reservation=require("../models/accommodation_reseration");

router.route("/add").post((req,res)=>{
    const user_ID= req.body.user_ID;
    const accommodation_ID= req.body.accommodation_ID;
    const DueDate=  req.body.DueDate;
    const Reserv_Date=  req.body.Reserv_Date;
    const NO_of_Accommodation= Number(req.body.NO_of_Accommodation);
    const NO_of_Adults = Number(req.body.NO_of_Adults );
    const NO_of_childs = Number(req.body.NO_of_childs );
    const price= Number(req.body.price);
    

    const newAccommodation_reservation = new Accommodation_reservation({
        user_ID,
        accommodation_ID,
        DueDate,
        Reserv_Date,
        NO_of_Accommodation,
        price,
        NO_of_childs,
        NO_of_Adults 
    })
    newAccommodation_reservation.save().then(()=>{
        res.json("Reservtion Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Accommodation_reservation.find().then((accommodation_reservations)=>{
        res.json(accommodation_reservations)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route('/update/:id').put((req, res, next) => {
    Accommodation_reservation.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Accommodation reservation updated successfully !')
      }
    })
  })


  router.route("/delete/:id").delete(async(req, res)=>{
    let accId=req.params.id;

    await Accommodation_reservation.findByIdAndDelete(accId)
    .then(()=>{
        res.status(200).send({status:" accommodation reservation deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})

router.route('/get/:id').get((req, res) => {
    Accommodation_reservation.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })  
module.exports=router;