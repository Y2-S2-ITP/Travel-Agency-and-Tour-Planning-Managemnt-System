import React from 'react';
import "../style/home.css";
import Header from "./header";
import Navbar from "./navbar";
import HomeFeed from './homeFeed';
import Footer from "./footer";

function home() {
    return (
        <div>
            <Header />
            <Navbar />
            <HomeFeed />
            <Footer />
        </div>
    )
}

export default home
