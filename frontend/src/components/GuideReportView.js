import React, { useEffect, useState } from "react";
import GeneratePdf from "./GuideReportGenerate";
import axios from "axios";

const GuideReportView = () =>{

    const [guideRes, setGuideRes] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8000/guidereservation/')
            .then((res) => {
                console.log(res);
                setGuideRes(res.data);
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
                                <button className="btn btn-primary col-lg-2" onClick={()=>GeneratePdf(guideRes)}>
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

export default GuideReportView;