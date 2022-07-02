import jsPDF from 'jspdf';
import "jspdf-autotable";

import { format } from "date-fns";

const GeneratePdf = documents =>{
    
    const doc = new jsPDF();

    const tableColumn = ["User ID","User name","Document name","Document link","Country name"," Submit Date"];
    const tableRows = [];

    documents.forEach(documents => {
        const documentData = [
            documents.user_ID,
            documents.user_name,
            documents.Document_name,
            documents.Document_Link,
            documents.Country_name,
            documents.Submit_date
        ];

        console.log(documentData);

        tableRows.push(documentData);
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