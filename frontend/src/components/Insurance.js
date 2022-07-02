import React from 'react'
import "../style/tour.css";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import InsuranceTypes from "./InsuranceTypes";


function Insurance() {
    return (
        <div>
            
            <Header />
            <Navbar />
            <InsuranceTypes />
            <Footer />
            
        </div>
    )
}

export default Insurance
