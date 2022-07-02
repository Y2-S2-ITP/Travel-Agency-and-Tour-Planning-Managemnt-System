import React,{Component} from 'react'
import Header from "./header";
import Navbar from "./navbar";
import PageImage from "./pageimage";
import Sidenavigation from "./sidenavigation";
import Footer from "./footer";
import axios from 'axios';


import "../style/application.css"
import Menu from "./Menu"

export default class Application extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        TravelDoc:[]
      };
    }
  
    componentDidMount(){
      this.retrieveTravelDoc();
    }
  
    retrieveTravelDoc(){
      axios.get("http://localhost:8000/TravelDoc").then(res =>{
        if(res.data.success){
          this.setState({
            TravelDoc:res.data.existingTravelDoc
          });
  
          console.log(this.state.TravelDoc)
        }
      })
    }

render() {
    return (
        <div>
            <Menu/>
            <Navbar/>
            <PageImage/>
            <Sidenavigation/>
             
             <div className="applicationTable">
               <h1>Applications</h1>
               <br/>
               <table class="table" style={{fontSize:"16px"}}>
                   <thead>
                       <tr>
                           <th scope="col">#</th>
                           <th scope="col">Country</th>
                           <th scope="col">URL</th>
                           <th scope="col">Link Updated date</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.state.TravelDoc.map((TravelDoc, index) =>(

                         <tr>
                             <th scope="row">{index+1}</th>
                             <td>{TravelDoc.country}</td>
                             <td>{TravelDoc.file_location_URL}</td>
                             <td>{TravelDoc.Updated_Date}</td>
                         </tr>

                       ))}
                   </tbody>

               </table>
             </div>

             <div className="footerpartA">
               <Footer/>
           </div>

            
        </div>
    )
}
}
