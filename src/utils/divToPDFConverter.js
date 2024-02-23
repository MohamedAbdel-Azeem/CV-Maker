import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePdf = () => {
    const cvPageElement = document.getElementById('cv-page');
    html2canvas(cvPageElement, { scale: 1.25 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', [canvas.width * 0.264583, canvas.height * 0.264583]);  // Create a new PDF with the size of the canvas
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width * 0.264583, canvas.height * 0.264583);  // Add the image to the PDF with the size of the canvas
        pdf.save("My CV.pdf");
      });
  };