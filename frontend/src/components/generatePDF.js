import jsPDF from 'jspdf';
import "jspdf-autotable";

import { format } from "date-fns";

const generatePDF = packagesReservations => {
    const doc = new jsPDF();

    const tableColumn = ["Name","Email","Package ID","Package Status","Due Date","Reservation Date","No Of Adults","No Of Childs","Paid Amount"];
    const tableRows = [];

    packagesReservations.forEach(packagesReservations => {
        const reservationData = [
            packagesReservations.userName,
            packagesReservations.userEmail,
            packagesReservations.PackageID,
            packagesReservations.packageStatus,
            packagesReservations.dueDate,
            packagesReservations.reservationDate,
            packagesReservations.noOfAdults,
            packagesReservations.noOfChilds,
            packagesReservations.paidAmount,

        ];
        
        tableRows.push(reservationData);
    });

    doc.autoTable(tableColumn,tableRows,{startY:20});
    const date = Date().split(" ");
    const date2 = format(new Date(), "yyyy-MM-dd");
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    doc.text("Tour package reservations made till ",14,15);
    doc.text(date2,108,15);
    doc.save(`report_${dateStr}.pdf`);
};

export default generatePDF;