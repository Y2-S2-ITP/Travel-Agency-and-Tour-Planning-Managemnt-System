import React, { useEffect, useState } from "react";
import GeneratePdf from "./CarReportGenerate";
import axios from "axios";

const CarReportView = () =>{

    const [carRes, setCarRes] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8000/carreservation/')
            .then((res) => {
                console.log(res);
                setCarRes(res.data);
            }).catch((err) => {
                console.log(err.message);
            });
    }, []);

    return(

        <div>
            <div className="container mb-4 mt-4 p-3">
                <div className="row">
                    {
                        <div className="row">
                            {(
                                <button className="btn btn-primary col-lg-2" onClick={()=>GeneratePdf(carRes)}>
                                    Generate Report PDF
                                </button>
                            )}    
                        </div>
                    }
                </div>
            </div>
        </div>

    )

}

export default CarReportView;