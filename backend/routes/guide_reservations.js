const router = require("express").Router();
const guideReservation = require("../models/Guide_Reservation");

router.route("/add").post((req,res)=>{

    let No_of_Days = req.body.No_of_Days;
    let Tour_place = req.body.Tour_place;
    let Starting_point = req.body.Starting_point;
    let Guide_ID = req.body.Guide_ID;
    let User_Name = req.body.User_Name;

    const guidereservationobj = new guideReservation({
        No_of_Days,
        Tour_place,
        Starting_point,
        Guide_ID,
        User_Name
    });

    guidereservationobj.save().then(()=>{
        res.json("Insert Data Successfully");
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/").get((req,res)=>{

    guideReservation.find().then((guideReservationData)=>{
        res.json(guideReservationData);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put((req,res)=>{
    
    let id = req.params.id;

    let No_of_Days = req.body.No_of_Days;
    let Tour_place = req.body.Tour_place;
    let Starting_point = req.body.Starting_point;
    let Guide_ID = req.body.Guide_ID;
    let User_Name = req.body.User_Name;

    const updateGuideReservation = {
        No_of_Days,
        Tour_place,
        Starting_point,
        Guide_ID,
        User_Name
    }

    guideReservation.findByIdAndUpdate(id,updateGuideReservation).then((updateGuideRes)=>{
        res.json(updateGuideRes);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/delete/:id").delete((req,res)=>{

    let id = req.params.id;

    guideReservation.findByIdAndDelete(id).then(()=>{
        res.json("Delete Successfully");
    }).catch((err)=>{
        console.log(err);
    });

});


router.route("/:id").get((req,res)=>{

    let id = req.params.id;

    guideReservation.findById(id).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    })

})

module.exports = router;