const router= require("express").Router();
let Accommodation =require("../models/accommodation");

router.route("/add").post((req,res)=>{
    const accommodation_ID= Number(req.body.accommodation_ID);
    const name= req.body.name;
    const location= req.body.location;
    const type= req.body.type;
    const phone= Number(req.body.phone);
    const price= Number(req.body.price);
    const owner = req.body.owner;
    const link = req.body.link;

    const newAccommodation = new Accommodation({
        accommodation_ID,
        name,
        location,
        type,
        price,
        owner,
        phone,
        link
    })
    newAccommodation.save().then(()=>{
        res.json("Accommodation Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Accommodation.find().then((accommodations)=>{
        res.json(accommodations)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route('/update/:id').put((req, res, next) => {
    Accommodation.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Accommodation updated successfully !')
      }
    })
  })

router.route("/delete/:id").delete(async(req, res)=>{
    let accId=req.params.id;

    await Accommodation.findByIdAndDelete(accId)
    .then(()=>{
        res.status(200).send({status:" accommodation deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})


router.route('/get/:id').get((req, res) => {
    Accommodation.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })  
module.exports=router;
