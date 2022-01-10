import React from 'react'
import { ReactPainter } from 'react-painter';
import './downloads.css'

// import { useRef } from "react";
// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";
// // import Document from "./Doocument"
// // import { Document } from 'react-pdf' 

const Downloads = () => {
    // const input = document.getElementById('toPdf');
    // const Downloads = useCallback(() => {
    //     if (!ctx || !ctx.current) {
    //       return;
    //     }
    //     if (ctx.current.lineWidth > 90 || ctx.current.lineWidth < 10) {
    //       direction.current = !direction.current;
    //     }
    //     direction.current ? ctx.current.lineWidth++ : ctx.current.lineWidth--;
    //   }, []);
    //     let doc = new jsPDF("portrait", "mm", "a4");
    //     doc.fromHTML(input, 1, 1);
    //     doc.save("myDocument.pdf");
    //     return (<div>downloads</div>)
    //     // return <DownloadLink src="/home/emanuele/Desktop/Projects/example1.pdf">Download Project Specs</DownloadLink>;
    //     const inputRef = useRef(null);
    //     const printDocument = () => {
    //         html2canvas(inputRef.current).then((canvas) => {
    //             const imgData = canvas.toDataURL("image/png");
    //             const pdf = new jsPDF();
    //             pdf.addImage(imgData, "JPEG", 0, 0);
    //             pdf.save("download.pdf");
    //         });
    //     };
    return (
        <div className="generalDivDown">
            <h1>ספר מה אתה רוצה לצייר</h1>
            <textarea rows="15" cols="60" name="textarea1"></textarea>
            <br />
            <br />
            <a href="https://magic-painter.netlify.app/">למעבר לצייר הקש כאן</a>
            {/* <button onClick={ReactPainter}></button> */}
            {/* <ReactPainter/> */}
        </div>
        //             <div className="App">
        //                 <h1>Hello CodeSandbox</h1>
        //                 <h2>Start editing to see some magic happen!</h2>
        //                 <div className="mb5">
        //                     <button onClick={printDocument}>Print</button>
        //                 </div>
        //                 <div id="divToPrint" ref={inputRef}>
        //                     {/* <Document /> */}
        //                 </div>
        //             </div>
        //         </>
    );
}

export default Downloads
