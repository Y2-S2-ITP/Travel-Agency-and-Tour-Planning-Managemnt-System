const router = require("express").Router();
const ground = require("../models/Ground");

router.route("/add").post((req,res)=>{

    let Ground_resourse_ID = req.body.Ground_resourse_ID;
    let Ground_resourse_name = req.body.Ground_resourse_name;

    const groundobj = new ground({
        Ground_resourse_ID,
        Ground_resourse_name
    });

    groundobj.save().then(()=>{
        res.json("Insert Data Successfully");
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/").get((req,res)=>{

    ground.find().then((grnd)=>{
        res.json(grnd);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put((req,res)=>{
    
    let id = req.params.id;

    const Ground_resourse_ID = req.body.Ground_resourse_ID;
    const Ground_resourse_name = req.body.Ground_resourse_name;

    const updateGround = {
        Ground_resourse_ID,
        Ground_resourse_name
    }

    ground.findByIdAndUpdate(id,updateGround).then((updateGround)=>{
        res.json(updateGround);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/delete/:id").delete((req,res)=>{

    let id = req.params.id;

    ground.findByIdAndDelete(id).then(()=>{
        res.json("Delete Successfully");
    }).catch((err)=>{
        console.log(err);
    });

});

module.exports = router;