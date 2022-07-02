import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGenerator = reservation =>{

    const doc = new jsPDF();

    const tableColumn = ["user_ID","accommodation_ID","DueDate","Reserv_Date","NO_of_Accommodation","NO_of_Adults","NO_of_childs,price"];
    const tableRows = [];

    reservation.forEach(reservation => {
        const reservationData = [
            reservation.user_ID,
            reservation.accommodation_ID,
            reservation.DueDate,
            reservation.Reserv_Date,
            reservation.NO_of_Accommodation,
            reservation.NO_of_Adults,
            reservation.NO_of_childs,
            reservation.price,
        ]

        tableRows.push(reservationData);
    });

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("Ticket Reservations List",14,15);
    doc.save(`Airline_${year}`+" "+`${month}`+" "+`${day}`+".pdf");

}

export default ReportGenerator