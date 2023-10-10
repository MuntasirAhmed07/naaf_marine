import React from "react";
import FooterLogo from "../../Assets/Footer-Logo.png";
import FooterSvg from "../Navbar/NavSvg";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="logo">
          <img src={FooterLogo} alt="footerlogo"/>
        </div>
        <div className="copyrights">
          Copyright© <span> Naaf Marine Services</span> -{" "}
          {new Date().getFullYear()} | All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
