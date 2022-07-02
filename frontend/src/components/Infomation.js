import React from 'react'
import Header from "./header";
import Navbar from "./navbar";
import PageImage from "./pageimage";
import Sidenavigation from "./sidenavigation";
import Footer from "./footer";
import Menu from "./Menu";

import "../style/information.css"
import Layout from './Layout';


function Infomation() {
    return (
        <div>
            <Menu/>
            <Navbar/>
            <PageImage/>
            <Sidenavigation/>
          <div className="details" style={{marginLeft:"425px"}}>
              <div >
                <h1 style={{fontSize:"22px"}}>Informations</h1>
                <br/>
                <p style={{fontSize:"16px"}}>Applying for visas can be a process which is full of hassle, taking up your productive time.
                 Our value proposition is to relieve you of the burden of visa processing and guide you through each step to ensure compliance with visa requirements.
                 We possess a well-equipped department with up to date information on all procedures and requirements to ensure smooth processing of all applications and resultant processes.
                 </p>
                 <br/>
                 <p style={{fontSize:"16px"}}>
                 Our experienced Visa Department will assist you with professional guidance in all aspects of obtaining Visas. Further, we provide consultancy for clients who plan on travelling to countries who’s Diplomatic Missions require the customer to submit the application in person. Assistance is provided for obtaining Visas for countries who’s Diplomatic Missions are not represented in Sri Lanka as well.
                 </p>

               </div>
           </div>
                    
           <div className="footerpartI">
               <Footer/>
           </div>

        </div>
    )
}

export default Infomation
