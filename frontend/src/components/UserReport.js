import jsPDF from 'jspdf';
import "jspdf-autotable";

import { format } from "date-fns";

const GeneratePdf = users =>{
    
    const doc = new jsPDF();

    const tableColumn = ["User name","Date of birth","Zip","Phone number","Email","Country"];
    const tableRows = [];

    users.forEach(users => {
        const userData = [
            users.name,
            users.date,
            users.address,
            users.zip,
            users.country,
            users.email
        ];

        console.log(userData);

        tableRows.push(userData);
    });

    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("List of travel documents",14,15);
    doc.save(`Travel_document_Report_${year +" "+ month +" "+date}.pdf`);
};

export default GeneratePdf;