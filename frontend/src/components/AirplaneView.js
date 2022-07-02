import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGenerator from './ReportGenerator';


export default function AirplaneView(){

    const[airline,setAirline] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/reservation/airticket/").then((res)=>{
            setAirline(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <div>
            <div>
                <div>
                    <button  onClick={()=>{ReportGenerator(airline)}}>Generate PDF</button>
                </div>
            </div>
        </div>
    )

}