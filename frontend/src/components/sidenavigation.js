import React from "react";
import "../style/sidenavigation.css";
import {SidenavigationData} from "./sidenavigationData"

function Sidenavigation() {
          return(
              <div className="sidebar" style={{fontSize:"16px"}}>
                   <ul className="SidenavigationList">
                   {SidenavigationData.map((val, key) => {
                   return (
                        <li key={key}
                        className="row"
                        id = {window.location.pathname === val.link ? "active" : ""}
                        onClick={() => {window.location.pathname = val.link}}>
                         <div>{val.titel}</div> 
                         </li>
                   )
              })}
                    </ul>
              </div> 
          );
}
export default Sidenavigation;