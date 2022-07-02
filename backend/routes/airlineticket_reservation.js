const router = require("express").Router();
const atreservation = require("../models/AirlineTicket_Reservation");
//insert
router.route("/add").post((req, res) => {

    let From = req.body.From;
    let To = req.body.To;
    let Date = req.body.Date;
    let Class = req.body.Class;
    let Service_Provider = req.body.Service_Provider;
    let Tickets = req.body.Tickets;
    let User_Name = req.body.User_Name;


    const reservationobj = new atreservation({

        From, To, Tickets, Date, Class, Service_Provider,User_Name
    });
    reservationobj.save().then(() => {

        res.json("Insert successfully");

    }).catch((err) => {

        console.log(err);
    })
});

//view
router.route("/").get((req, res) => {

    atreservation.find().then((rticket) => {
        res.json(rticket);
    }).catch((err) => {
        console.log(err);
    });

});

//delete
router.route("/delete/:rid").delete((req, res) => {

    let Rid = req.params.rid;

    atreservation.findByIdAndDelete(Rid).then(() => {
        res.json("Delete Successfully");
    }).catch((err) => {
        console.log(err);
    });

})

//update
router.route("/update/:rid").put((req, res) => {

    const Uid = req.params.rid;

    let From = req.body.From;
    let To = req.body.To;
    let Date = req.body.Date;
    let Class = req.body.Class;
    let Service_Provider = req.body.Service_Provider;
    let Tickets = req.body.Tickets;
    let User_Name = req.body.User_Name;



    const reservationobj = ({

        From, To, Tickets, Date, Class, Service_Provider,User_Name

    });
    atreservation.findByIdAndUpdate(Uid, reservationobj).then((ubdata) => {
        res.json(ubdata);
    }).catch((err) => {
        console.log(err);
    });
})


router.route("/:id").get((req, res) => {


    let id = req.params.id;

    atreservation.findById(id).then((rticket) => {
        res.json(rticket);
    }).catch((err) => {
        console.log(err);
    });

});
module.exports = router;