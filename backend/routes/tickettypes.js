const router=require("express").Router();
const tickettype =require("../models/TicketType");
//insert
router.route("/add").post((req,res)=>{

    let Ticket_Type_ID=req.body.Ticket_Type_ID;
    let Ticket_Type=req.body.Ticket_Type;

    const ticketobj=new tickettype({

        Ticket_Type_ID,Ticket_Type

    });

    ticketobj.save().then(()=>{

        res.json("Insert successfully");
    }).catch((err)=>{

        console.log(err);
    })

});
//view
router.route("/").get((req,res)=>{

    tickettype.find().then((ttype)=>{
        res.json(ttype);
    }).catch((err)=>{
        console.log(err);
    });
});

//delete

router.route("/delete/:rid").delete((req,res)=>{

    let Rid=req.params.rid;

    tickettype.findByIdAndDelete(Rid).then(()=>{
          res.json("Delete Successfully");
    }).catch((err)=>{
        console.log(err);
    });

})

//update

router.route("/update/:rid").put((req,res)=>{

    const Uid=req.params.rid;
 
    let Ticket_Type_ID=req.body.Ticket_Type_ID;
    let Ticket_Type=req.body.Ticket_Type;

    const ticketobj=({

        Ticket_Type_ID,Ticket_Type

    });

    tickettype.findByIdAndUpdate(Uid,ticketobj).then((ubdata)=>{
    res.json(ubdata);
 }).catch((err)=>{
    console.log(err);
    });
 })

module.exports=router;