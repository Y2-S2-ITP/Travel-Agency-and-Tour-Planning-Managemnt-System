import jsPDF from 'jspdf';
import "jspdf-autotable";

const CarReportGenerate = cars =>{
    
    const doc = new jsPDF();

    const tableColumn = ["User","Car ID","Car Type","From","To","Date","Time"];
    const tableRows = [];

    cars.forEach(cars => {
        const carData = [
            cars.User_Name,
            cars.Car_ID,
            cars.Car_Type,
            cars.From,
            cars.To,
            cars.Date,
            cars.Time
        ]

        tableRows.push(carData);
    });

    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("List of Cars",14,15);
    doc.save(`Car_Report_${year +" "+ month +" "+date}.pdf`);
};

export default CarReportGenerate;