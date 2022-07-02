const router = require("express").Router();
const guide = require("../models/Guide");

router.route("/add").post((req,res)=>{

    let Guide_ID = req.body.Guide_ID;
    let Full_Name = req.body.Full_Name;
    let Age = req.body.Age;
    let Address = req.body.Address;
    let Email = req.body.Email;
    let Phone = req.body.Phone;
    let Experience = req.body.Experience;
    let Fee = req.body.Fee;
    let Img = req.body.Img;

    const guideobj = new guide({
        Guide_ID,
        Full_Name,
        Age,
        Address,
        Email,
        Phone,
        Experience,
        Fee,
        Img
    });

    guideobj.save().then(()=>{
        res.json("Insert Data Successfully");
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/").get((req,res)=>{

    guide.find().then((guide)=>{
        res.json(guide);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put((req,res)=>{
    
    let id = req.params.id;

    let Guide_ID = req.body.Guide_ID;
    let Full_Name = req.body.Full_Name;
    let Age = req.body.Age;
    let Address = req.body.Address;
    let Email = req.body.Email;
    let Phone = req.body.Phone;
    let Experience = req.body.Experience;
    let Fee = req.body.Fee;
    let Img = req.body.Img;

    const updateGuide = {
        Guide_ID,
        Full_Name,
        Age,
        Address,
        Email,
        Phone,
        Experience,
        Fee,
        Img
    }

    guide.findByIdAndUpdate(id,updateGuide).then((updateGuide)=>{
        res.json(updateGuide);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/delete/:id").delete((req,res)=>{

    let id = req.params.id;

    guide.findByIdAndDelete(id).then(()=>{
        res.json("Delete Successfully");
    }).catch((err)=>{
        console.log(err);
    });

});


//find one
router.route("/:id").get((req,res)=>{

    let id = req.params.id;

    guide.findById(id).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.err(err);
    })

})

module.exports = router;