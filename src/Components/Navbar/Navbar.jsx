import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavLogo from "../../Assets/Nav-logo.png";
import NavSvg from "./NavSvg";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="nav">
        <NavLink className="nav-logo" to="/" onClick={handleClick}>
          <img src={NavLogo} alt="" />
        </NavLink>
        <div>
          <ul className={click ? "navbar active" : "navbar"}>
            <li>
              <NavLink to="/" onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="about_us" onClick={handleClick}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="our_team" onClick={handleClick}>
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink to="services" onClick={handleClick}>
                Sevices
              </NavLink>
            </li>
            <li>
              <NavLink to="fleet" onClick={handleClick}>
                Fleet
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="career" onClick={handleClick}>
                Career
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" onClick={handleClick}>
                Contact
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="mobile-nav" onClick={handleClick}>
          <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
