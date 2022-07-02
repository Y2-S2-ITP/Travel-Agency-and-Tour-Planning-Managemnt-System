const router=require("express").Router();
const busticket=require("../models/Bus_Ticket");
//insert
router.route("/add").post((req,res)=>{

    let Ticket_Type=req.body.Ticket_Type;
    let From=req.body.From;
    let To=req.body.To;
    let Distance=req.body.Distance;
    let Ticket_Fee=req.body.Ticket_Fee;
    let Begging_Time=req.body.Begging_Time;
    let Arrival_Time=req.body.Arrival_Time;
    let Date=req.body.Date;
    
    const busticketobj=new busticket({

        Ticket_Type,From,To,Arrival_Time,Begging_Time,Distance,Date,Ticket_Fee
    });
     busticketobj.save().then(()=>{

        res.json("Insert successfully");
     }).catch((err)=>{

        console.log(err);

     });
});

//view
router.route("/").get((req,res)=>{

   busticket.find().then((Bticket)=>{
       res.json(Bticket);
   }).catch((err)=>{
     console.log(err);
   });

});


//delete
router.route("/delete/:bid").delete((req,res)=>{

   let Bid = req.params.bid;

   busticket.findByIdAndDelete(Bid).then(()=>{
       res.json("Delete successfully");
   }).catch((err)=>{
       console.log(err);
   });

});

//update
router.route("/update/:bid").put((req,res)=>{

   const Uid=req.params.bid;

   let Ticket_Type=req.body.Ticket_Type;
    let From=req.body.From;
    let To=req.body.To;
    let Distance=req.body.Distance;
    let Ticket_Fee=req.body.Ticket_Fee;
    let Begging_Time=req.body.Begging_Time;
    let Arrival_Time=req.body.Arrival_Time;
    let Date=req.body.Date;

   const busticketobj=({

      Ticket_Type,From,To,Arrival_Time,Begging_Time,Distance,Date,Ticket_Fee
  });

  busticket.findByIdAndUpdate(Uid,busticketobj).then((ubdata)=>{
   res.json(ubdata);
}).catch((err)=>{
   console.log(err);
});
})


//Find one
router.route("/:id").get((req,res)=>{

   let id = req.params.id;

   busticket.findById(id).then((data)=>{
      res.json(data);
   }).catch((err)=>{
      console.log(err);
   })

})


module.exports=router;
