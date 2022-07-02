const router=require("express").Router();
const eventticket=require("../models/Event_reservation");

//insert
router.route("/add").post((req,res)=>{

    
    let Event_Name=req.body.Event_Name;
    let Location=req.body.Location;
    let Date=req.body.Date;
    let No_Of_Tickets=req.body.No_Of_Tickets;
    let User_Name=req.body.User_Name;
   
    
    const eventobj=new eventticket({
        Event_Name,Location,Date,No_Of_Tickets,User_Name
    });

    
     eventobj.save().then(()=>{
        res.json("Insert successfully");
    }).catch((err)=>{
        console.log(err);
     });

});

//view
router.route("/").get((req,res)=>{

    eventticket.find().then((aticket)=>{
        res.json(aticket);
    }).catch((err)=>{
      console.log(err);
    });

});

//delete
router.route("/delete/:id").delete((req,res)=>{

    let Aid = req.params.id;

    eventticket.findByIdAndDelete(Aid).then(()=>{
        res.json("Delete successfully");
    }).catch((err)=>{
        console.log(err);
    });

})

//update
router.route("/update/:id").put((req,res)=>{

    const uid = req.params.id;

    
    
    let Event_Name=req.body.Event_Name;
    let Location=req.body.Location;
    let Date=req.body.Date;
    let No_Of_Tickets=req.body.No_Of_Tickets;
    let User_Name=req.body.User_Name;

    const eventobj=({
        Event_Name,Location,Date,No_Of_Tickets,User_Name
    });

    

    eventticket.findByIdAndUpdate(uid,eventobj).then((udata)=>{
        res.json(udata);
    }).catch((err)=>{
        console.log(err);
    });

})

module.exports=router;