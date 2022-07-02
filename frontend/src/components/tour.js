import React from 'react'
import "../style/tour.css";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import Menu from "./Menu";
import Tourpackage from "./tourpackage";

function tour() {
    return (
        <div>
            <Menu />
            <Navbar />
            <Tourpackage />
            <Footer />
        </div>
    )
}

export default tour
