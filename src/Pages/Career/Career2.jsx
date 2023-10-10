import React from "react";
import Career3 from "../../Assets/Career/career3.png";
import Career4 from "../../Assets/Career/career4.png";
import "./career.css";

const XLSX_FILE_URL = 'http://localhost:3000/Naaf-Marine-CV.xlsx'
// const XLSX_FILE_URL = 'https://www.naafmarine.com/Naaf-Marine-CV.xlsx'
const Career = () => {
  const downloadExcelSheet = (url) => {
    fetch(url).then(response=>response.blob()).then(blob=>{
      const blobURL = window.URL.createObjectURL(new Blob([blob]))
      const fileName = url.split('/').pop();
      const link = document.createElement('a');
      link.href = blobURL;
      link.setAttribute = ('download',fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
   
  };
  return (
    <div className="header">
       <h2 className="underline"> Career</h2>
       <div className="join">
        <p>Join Our Team</p>
       </div>
       <div className="be-part">
        <p>BE A PART OF<br/>NAAF MARINE SERVICE</p>
       </div>
       <section className="career-img-wrapper">
        <div class="container">
          <div class="part-1">
            <img src={Career4} alt="" />
          </div>
          <div class="part-2">
            <img src={Career3} alt="" />
          </div>
          <div class="part-3">
            <img src={Career3} alt="" />
          </div>
          <div class="part-4">
            <img src={Career4} alt=""/>
          </div>
        </div>
       </section>
       <section>
        <button className="button" onClick={() => downloadExcelSheet(XLSX_FILE_URL)}> Apply Here</button>
       </section>
    </div>
  );
};

export default Career;
