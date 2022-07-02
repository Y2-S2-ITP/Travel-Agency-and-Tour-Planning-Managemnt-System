const router=require("express").Router();
const airlineticket=require("../models/Airline_Ticket");

//insert
router.route("/add").post((req,res)=>{

    let Ticket_Type=req.body.Ticket_Type;
    let From=req.body.From;
    let To=req.body.To;
    let Flight_Number=req.body.Flight_Number;
    let Service_Provider=req.body.Service_Provider;
    let Departure_Time=req.body.Departure_Time;
    let Arrival_Time=req.body.Arrival_Time;
    let Date=req.body.Date;
    let No_Of_Seats=req.body.No_Of_Seats;
    let Ticket_Fee=req.body.Ticket_Fee;
    
    const airlineticketobj=new airlineticket({
        Ticket_Type,Service_Provider,Flight_Number,Departure_Time,Arrival_Time,Date,From,To,Ticket_Fee,No_Of_Seats
    });

    
     airlineticketobj.save().then(()=>{
        res.json("Insert successfully");
    }).catch((err)=>{
        console.log(err);
     });

});

//view
router.route("/").get((req,res)=>{

    airlineticket.find().then((aticket)=>{
        res.json(aticket);
    }).catch((err)=>{
      console.log(err);
    });

});

//delete
router.route("/delete/:id").delete((req,res)=>{

    let Aid = req.params.id;

    airlineticket.findByIdAndDelete(Aid).then(()=>{
        res.json("Delete successfully");
    }).catch((err)=>{
        console.log(err);
    });

})

//update
router.route("/update/:id").put((req,res)=>{

    const uid = req.params.id;

    let Ticket_Type=req.body.Ticket_Type;
    let From=req.body.From;
    let To=req.body.To;
    let Flight_Number=req.body.Flight_Number;
    let Service_Provider=req.body.Service_Provider;
    let Departure_Time=req.body.Departure_Time;
    let Arrival_Time=req.body.Arrival_Time;
    let Date=req.body.Date;
    let No_Of_Seats=req.body.No_Of_Seats;
    let Ticket_Fee=req.body.Ticket_Fee;

    const airlineticketobj=({
        Ticket_Type,Service_Provider,Flight_Number,Departure_Time,Arrival_Time,Date,From,To,Ticket_Fee,No_Of_Seats

    })

    airlineticket.findByIdAndUpdate(uid,airlineticketobj).then((udata)=>{
        res.json(udata);
    }).catch((err)=>{
        console.log(err);
    });

})
//Find one
router.route("/:id").get((req,res)=>{

    let id = req.params.id;
 
    airlineticket.findById(id).then((data)=>{
       res.json(data);
    }).catch((err)=>{
       console.log(err);
    })
 
 })
 
module.exports=router;