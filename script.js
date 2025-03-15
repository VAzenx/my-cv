document.getElementById("download").addEventListener("click", function () {
    const element = document.getElementById("cv");
    html2pdf(element, {
        margin: 10,
        filename: "CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    });
});
