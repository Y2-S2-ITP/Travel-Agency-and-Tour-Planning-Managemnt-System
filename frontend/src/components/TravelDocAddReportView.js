import React, { useEffect, useState } from "react";
import GeneratePdf from "./TravelDocAddReport";
import axios from "axios";


function TravelDocAddReportView() {

    const [documents, setDocuments] = useState([]);

    useEffect(() => {

        function getalldoc(){

            axios.get("http://localhost:8000/TravelDocAdd").then(res => {
            if (res.data.success) {
                console.log(res.data)
            setDocuments(
                res.data.existingTravelDocAdd
             );
            }
          })

        }
        getalldoc();
    }, []);

    const Documents = documents;

        return (
            <div>
                <div className="container mb-4 mt-4 p-3">
                    <div className="row">
                            <div className="row">
                                {(
                                    <button className="btn btn-primary col-lg-2" onClick={() => GeneratePdf(Documents)}>
                                        Generate Report PDF
                                    </button>
                                )}
                            </div>
                    </div>
                </div>
            </div>
        );

};
export default TravelDocAddReportView;