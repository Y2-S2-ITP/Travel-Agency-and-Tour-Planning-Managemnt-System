import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGenerator = Airline =>{

    const doc = new jsPDF();

    const tableColumn = ["User Name","Date","From","To","Service Provider","Class","Tickets"];
    const tableRows = [];

    Airline.forEach(Airline => {
        const AirlineData = [
            Airline.User_Name,
            Airline.Date,
            Airline.From,
            Airline.To,
            Airline.Service_Provider,
            Airline.Class,
            Airline.Tickets
        ]

        tableRows.push(AirlineData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("Ticket Reservations List",14,15);
    doc.save(`Airline_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGenerator;