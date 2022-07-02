
import React,{useState} from 'react';
import axios from 'axios';

export default function PaymentPage() {

    const [Card_Holder_Name, setCardholderName] = useState("");
    const [Card_Number, setCardNumber] = useState("");
    const [Expiary_date, setExpiaryDate] = useState("");
    const [Card_CVV, setCardCVV] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newpayment = {
            Card_Holder_Name,Card_Number,Expiary_date,Card_CVV
        }
        
       axios.post("http://localhost:8000/Payment/add",newpayment).then(()=>{
            alert(" THANK YOU FOR YOUR BOOKING.  WELCOME!!! ");
            
        }).catch((err)=>{
            alert(err)
        })
    }
    

    return (
       
        

      	<div class="row-fluid">
        <center>
      <form class="form-horizontal  mt-5  mb-5"style={{ background:"lightyellow",width:"30%"}}onSubmit={sendData}>
        <fieldset>
          <div id="legend">
            <legend class=" "style={{ color: "dark" , fontSize:"50px"}}>Payment</legend>
          </div>
     
        
          <div class="control-group mt-5"style={{ color: "dark" , fontSize:"20px"}}>
            <label class="control-label"  for="username">Card Holder's Name</label>
            <div class="controls">
              <input type="text" id="username" name="username" placeholder="" class="input-xlarge"style={{ color: "black" }}onChange={
                            (e) => {
                                setCardholderName(e.target.value);
                            }
                        }/>
            </div>
          </div>
    
          <div class="control-group mt-5"style={{ color: "dark" , fontSize:"20px"}}>
            <label class="control-label" for="number">Card Number</label>
            <div class="controls">
              <input type="text" id="number" name="number" placeholder="" class="input-xlarge"style={{ color: "black" }}onChange={
                            (e) => {
                                setCardNumber(e.target.value);
                            }
                        }/>
            </div>
          </div>
     
        
          <div class="control-group mt-5"style={{ color: "dark" , fontSize:"20px"}}>
            <label class="control-label" >Card Expiry Date</label>
            <div class="controls">
              <select class="span3 " name="expiry_month" id="expiry_month"style={{ color: "black" }}onChange={
                            (e) => {
                                setExpiaryDate(e.target.value);
                            }
                        }>
                <option selected>select Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">Auguest</option>
                <option value="September">September</option>
                <option value="Octomber">Octomber</option>1
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <select class="span2"  name="expiry_year"style={{ color: "black" }}>
              <option selected>select Year</option>
                <option value="13">2013</option>
                <option value="14">2014</option>
                <option value="15">2015</option>
                <option value="16">2016</option>
                <option value="17">2017</option>
                <option value="18">2018</option>
                <option value="19">2019</option>
                <option value="20">2020</option>
                <option value="21">2021</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
              </select>
            </div>
          </div>
     
          
          <div class="control-group mt-5"style={{ color: "dark" , fontSize:"20px"}}>
            <label class="control-label"  for="password_confirm">Card CVV</label>
            <div class="controls">
              <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="span2"style={{ color: "black" }}onChange={
                            (e) => {
                                setCardCVV(e.target.value);
                            }
                        }/>
            </div>
          </div>
     
          
          <div class="control-group mt-5"style={{ color: "dark" , fontSize:"20px"}}>
            <div class="controls">
              <label class="checkbox mt-2" for="save_card">
                <input type="checkbox" id="save_card" value="option1"/>
                Save card on file?
              </label>
            </div>
          </div>
     
          
          <div class="control-group">
            <div class="controls">
            <button type="submit" class="btn btn-success  fw-bold mb-5 mt-5"style={{ fontSize: "20px",width:"50%" }}>Book now</button>
            </div>
          </div>
     
        </fieldset>
      </form>
      </center>
    </div>

      
 
  

    );

}