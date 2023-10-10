import React from "react";
import Fleet1 from "../../Assets/Fleet/fleet1.png";
import { default as Fleet2, default as Hero } from "../../Assets/Fleet/fleet2.png";
import Fleet3 from "../../Assets/Fleet/fleet3.png";
import "./fleet.css";


const Fleet = () => {
  return (
    <div className="fleet-container">
      <h2 className="underline fleet-header"> Registration</h2>
      <h4> NAAF FLEET</h4>
      <section>
        <img className="fleet-stat" src={Fleet1} alt="" />
      </section>
      <h4> Principals & Services</h4>
      <section>
        <img className="fleet-stat" src={Fleet2} alt="" />
      </section>
      <section className="fleet-end">
        <div className="fleet-text-wrapper">
          <h4>Principals & Services in the recent past</h4>
          <ul className="fleet-bullet">
            <li>
              Technical Manager & Crewing for M/S Summit Alliance Port Limited
              for following container feeder vessels:
              <br />
              MV. S A P L – 1, Owned by M/S Summit Alliance Port Limited, <br />
              MV. PANGAON EXPRESS, MV. PANGAON SUCCESS & MV. PANGAON VISION –
              Owned by Chattogram Port Authority.
            </li>
            <li>
              Technical Manager & Crewing for M/S Seaglory Shipping Agency
              Limited for following container feeder vessel: <br />
              MV. UDAYUN EXPRESS Owned by BIWTC
            </li>
          </ul>
        </div>
      </section>
      <section>
        <img className="fleet-graph" src={Fleet3} alt="" />
      </section>
      <section className="partnership-concept">
        <p> partnership concept</p>
      </section>
      <section className="fleet-service-wrapper">
        <div className="fleet-text-wrapper fleet-top-spacing">
          <h4>BUSINESS GROWTH</h4>
          <p className="fleet-para">
            We aim to expand our services to help our partners further with
            their business.
            <br /> Our plan for growth includes delivering the following
            services:
          </p>
          <ul className="fleet-bullet">
            <li>Customers Satisfaction.</li>
            <li>Crew welfare services.</li>
            <li>Documentation.</li>
            <li>Accounting.</li>
            <li>Training.</li>
          </ul>
        </div>
        <div className="our-core-service">
          <img src={Hero} alt="" />
        </div>
      </section>
      <section className="fleet-service-wrapper">
        <div className="fleet-text-wrapper fleet-top-spacing">
          <h4>LONG TERM PARTNERSHIP RELATION</h4>
          <p className="fleet-para">
            The trust and confidence of our partners, employees and other
            stakeholders are valuable to us. To maintain ethical and mutually
            beneficial relationships with our stakeholders. we designed our
            business model around these values:
          </p>
          <ul className="fleet-bullet">
            <li>Integrity and professionalism.</li>
            <li>Respect for all cultures .</li>
            <li>Transparency.</li>
          </ul>
        </div>
      </section>
      <section className="fleet-service-wrapper">
        <div className="fleet-text-wrapper fleet-top-spacing">
          <h4>BUSINESS REPUTATION</h4>
          <p className="fleet-para">
            Reputation is an asset for a company. We help our partners maintain
            a reputable image in the industry through deploying competent and
            globally competitive workforce who will take an active role in
            contributing positively to the image of the company.
          </p>
        </div>
        <div className="our-core-service">
          <img src={Hero} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Fleet;
