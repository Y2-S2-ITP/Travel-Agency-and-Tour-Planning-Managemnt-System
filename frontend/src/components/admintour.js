import React, { useState } from "react";
import "../style/admintour.css";
import axios from "axios";
import AdminViewPackage from "./adminViewPackage"


export default function Admintour() {

    //start add package
    const [packageID, setId] = useState("");
    const [packageName, setName] = useState("");
    const [PackageType, setType] = useState("");
    const [NoOfDays, setDays] = useState("");
    const [MealPlan, setMealplan] = useState("");
    const [Transpotation, setTransportation] = useState("");
    const [Activities, setActivities] = useState("");
    const [LocationList, setLocations] = useState("");
    const [PriceForAdult, setPrice_a] = useState("");
    const [PriceForChild, setPrice_c] = useState("");
    const [ImageLink, setImageLink] = useState("");


    function sendData(e) {
        e.preventDefault();

        const newPackage = {
            packageID,
            packageName,
            PackageType,
            NoOfDays,
            MealPlan,
            Transpotation,
            Activities,
            LocationList,
            PriceForAdult,
            PriceForChild,
            ImageLink
        }

        axios.post("http://localhost:8000/tourPackage/addPackage", newPackage).then(() => {
            console.log(newPackage);
            alert("Package Added");
        }).catch((err) => {
            alert(err);
        });
    }
    //end add package



    return (

        //Start Form for Tour Package
        <div>
            <>
                <hr />
            </>

            <form onSubmit={sendData} className="row g-3 needs-validation" novalidate>
                <div className="col-md-4">
                    <label for="validationCustom01" className="form-label">ID</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="ID" onChange={(e) => {

                        setId(e.target.value);

                    }} required />

                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Name</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Name" onChange={(e) => {

                        setName(e.target.value);

                    }} required />

                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Type</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Type" onChange={(e) => {

                        setType(e.target.value);

                    }} required />

                </div>

                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label"># Of Days</label>
                    <input type="number" className="form-control" id="validationCustom02" placeholder="Days" onChange={(e) => {

                        setDays(e.target.value);

                    }} required />

                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Meal-Plan</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Meal-Plan" onChange={(e) => {

                        setMealplan(e.target.value);

                    }} required />

                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Transportation</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Transportation" onChange={(e) => {

                        setTransportation(e.target.value);

                    }} required />

                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Price (Adult)</label>
                    <input type="number" className="form-control" id="validationCustom02" placeholder="Price (Adult)" onChange={(e) => {

                        setPrice_a(e.target.value);

                    }} required />

                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Price (Child)</label>
                    <input type="number" className="form-control" id="validationCustom02" placeholder="Price (Child)" onChange={(e) => {

                        setPrice_c(e.target.value);

                    }} required />

                </div>

                <div className="mb-3 col-md-4">
                    <label for="validationTextarea" className="form-label">Activity</label>
                    <textarea className="form-control" id="validationTextarea" placeholder="Activity" onChange={(e) => {

                        setActivities(e.target.value);

                    }} required></textarea>

                </div>
                <div className="mb-3 col-md-4">
                    <label for="validationTextarea" className="form-label">Location</label>
                    <textarea className="form-control" id="validationTextarea" placeholder="Location" onChange={(e) => {

                        setLocations(e.target.value);

                    }} required></textarea>

                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Image Link</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Image Link" onChange={(e) => {

                        setImageLink(e.target.value);

                    }} required />

                </div>


            
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Add</button>
                </div>
            </form>
            {/*End Form for Tour Package*/}
            <>
                <hr />
            </>
            <AdminViewPackage />

        </div>


    )
}
