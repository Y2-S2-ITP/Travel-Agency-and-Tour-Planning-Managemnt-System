const router = require("express").Router();
const payment = require("../models/payment");
//insert
router.route("/add").post((req, res) => {

    let Card_Holder_Name = req.body.Card_Holder_Name;
    let Card_Number = req.body.Card_Number;
    let Expiary_date = req.body.Expiary_date;
    let Card_CVV = req.body.Card_CVV;
    


    const pobj = new payment({

        Card_Holder_Name,Card_Number,Card_CVV,Expiary_date
    });
    pobj.save().then(() => {

        res.json("Insert successfully");

    }).catch((err) => {

        console.log(err);
    })
});


module.exports = router;