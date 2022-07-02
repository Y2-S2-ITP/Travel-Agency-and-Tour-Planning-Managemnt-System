const router=require("express").Router();
const btreservation=require("../models/BusTicket_Reservation");
//insert
router.route("/add").post((req,res)=>{

let From=req.body.From;
let To=req.body.To;
let Date=req.body.Date;
let Tickets=req.body.Tickets;
let User_Name = req.body.User_Name;


const reservationobj=new btreservation({
   
    From,To,Tickets,Date,User_Name
});
reservationobj.save().then(()=>{
   
    res.json("Insert successfully");

}).catch((err)=>{

    console.log(err);
   })
});

//view
router.route("/").get((req,res)=>{

    btreservation.find().then((rticket)=>{
        res.json(rticket);
    }).catch((err)=>{
      console.log(err);
    });

});

//delete
router.route("/delete/:rid").delete((req,res)=>{

    let Rid=req.params.rid;

    btreservation.findByIdAndDelete(Rid).then(()=>{
          res.json("Delete Successfully");
    }).catch((err)=>{
        console.log(err);
    });

})

//update
router.route("/update/:rid").put((req,res)=>{

    const Uid=req.params.rid;
 
    let From=req.body.From;
   let To=req.body.To;
   let Date=req.body.Date;
   let Tickets=req.body.Tickets;
   let User_Name = req.body.User_Name;

const reservationobj=({
   
    From,To,Tickets,Date,User_Name

});  
    btreservation.findByIdAndUpdate(Uid,reservationobj).then((ubdata)=>{
    res.json(ubdata);
 }).catch((err)=>{
    console.log(err);
    });
 })
 module.exports=router;