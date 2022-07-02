import jsPDF from 'jspdf';
import "jspdf-autotable";


const GuideReportGenerate = guide =>{
    
    const doc = new jsPDF();

    const tableColumn = ["User","Guide ID","Tour Place","Starting Point","Number Of Days"];
    const tableRows = [];

    guide.forEach(guide => {
        const guideData = [
            guide.User_Name,
            guide.Guide_ID,
            guide.Tour_place,
            guide.Starting_point,
            guide.No_of_Days
        ]

        tableRows.push(guideData);
    });

    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    

    doc.autoTable(tableColumn,tableRows,{startY:20});
    doc.text("List of guides",14,15);
    doc.save(`guide_Report_${year +" "+ month +" "+date}.pdf`);
};

export default GuideReportGenerate;