const router = require("express").Router();
const car = require("../models/Car");

router.route("/add").post((req,res)=>{

    let Car_ID = req.body.Car_ID;
    let Car_Type = req.body.Car_Type;
    let Brand = req.body.Brand;
    let Model = req.body.Model;
    let Location = req.body.Location;
    let Cost_per_KM = req.body.Cost_per_KM;
    let Img = req.body.Img;

    const carobj = new car({
        Car_ID,
        Car_Type,
        Brand,
        Model,
        Location,
        Cost_per_KM,
        Img
    });

    carobj.save().then(()=>{
        res.json("Insert Data Successfully");
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/").get((req,res)=>{

    car.find().then((carData)=>{
        res.json(carData);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/:id").get((req,res)=>{
    const id = req.params.id;
    
    car.findById(id).then((carData)=>{
        res.json(carData)
    }).catch((err)=>{
        console.log(err);
    })

});


router.route("/update/:id").put((req,res)=>{
    
    let id = req.params.id;

    let Car_ID = req.body.Car_ID;
    let Car_Type = req.body.Car_Type;
    let Brand = req.body.Brand;
    let Model = req.body.Model;
    let Location = req.body.Location;
    let Cost_per_KM = req.body.Cost_per_KM;
    let Img = req.body.Img;

    const updateCar = {
        Car_ID,
        Car_Type,
        Brand,
        Model,
        Location,
        Cost_per_KM,
        Img
    }

    car.findByIdAndUpdate(id,updateCar).then((updateCar)=>{
        res.json(updateCar);
    }).catch((err)=>{
        console.log(err);
    });

});


router.route("/delete/:id").delete((req,res)=>{

    let id = req.params.id;

    car.findByIdAndDelete(id).then(()=>{
        res.json("Delete Successfully");
    }).catch((err)=>{
        console.log(err);
    });

});



module.exports = router;