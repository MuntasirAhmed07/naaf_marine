import React from "react";
import Client1 from '../../Assets/Clients/client1.png';
import Client10 from '../../Assets/Clients/client10.png';
import Client11 from '../../Assets/Clients/client11.png';
import Client12 from '../../Assets/Clients/client12.png';
import Client13 from '../../Assets/Clients/client13.png';
import Client14 from '../../Assets/Clients/client14.png';
import Client15 from '../../Assets/Clients/client15.png';
import Client16 from '../../Assets/Clients/client16.png';
import Client2 from '../../Assets/Clients/client2.png';
import Client3 from '../../Assets/Clients/client3.png';
import Client4 from '../../Assets/Clients/client4.png';
import Client5 from '../../Assets/Clients/client5.png';
import Client6 from '../../Assets/Clients/client6.png';
import Client7 from '../../Assets/Clients/client7.png';
import Client8 from '../../Assets/Clients/client8.png';
import Client9 from '../../Assets/Clients/client9.png';
import Card from "../../Components/Card/Card";
import VisionCard from "../../Components/Card/VisionCard";
import HeaderText from "../../Components/HeaderText/HeaderText";
import Navbar from "../../Components/Navbar/Navbar";
import Ship from "../../Components/Ship/Ship";
import "./home.css";


const Home = () => {
  return (
    <div>
      <header className="header-container">
        <div className="boat-container">
          <Ship />
        </div>
        <HeaderText />
      </header>
      <article className="our-work">
        <h2 className="underline">What We Do</h2>
        <p>
          NAAF MARINE GROUP consisting of NAAF MARINE SERVICES and NAAF MARINE
          LOGISTICS established in the year 2012 holding all necessary
          Certificates / Licenses to provide all kind of shipping related
          services such as Crew Management, Technical Management / ISM Manager
          etc., to the marine industry at home and abroad including Local
          Shipping Agency, Owner’s Protecting Agency, NVOCC Services & Logistic
          Supports at Chattogram, Mongla, Payra Bondar including Pangaon ICT &
          Other IWCT and private LPG Terminals.
        </p>
      </article>
      <section className="card-container">
        <Card />
        <VisionCard />
      </section>
      <section className="our-client">
        <h2 className="underline">OUR CLIENTS</h2>
        <div className="client-list">
          <img
            className="client-image"
            src={Client1}
            alt="Client Name"
          />
          <img
            className="client-image"
            src={Client2} 
            alt="Client Name"
          />
          <img
            className="client-image"
            src={Client3}
            alt="Client Name"
          />
          <img
            className="client-image"
            src={Client4}
            alt="Client Name"
          />
          <img
            className="client-image"
            src={Client5}
            alt="Client Name"
          />
          <img
            className="client-image"
            src={Client6}
            alt="Client Name"
          />
          <img
            className="without-background"
            src={Client7}
            alt="Client Name"
          />
          <img
            className="with-background height-auto"
            src={Client8}
            alt="Client Name"
          />
          <img
            className="with-background height-auto"
            src={Client9}
            alt="Client Name"
          />
          <img
            className="with-background height70"
            src={Client10}
            alt="Client Name"
          />
          <img
            className="with-background height-auto"
            src={Client11}
            alt="Client Name"
          />
          <img
            className="with-background height-auto"
            src={Client12}
            alt="Client Name"
          />
          <img
            className="with-background height-auto"
            src={Client13}
            alt="Client Name"
          />

          <img
            className="with-background height70"
            src={Client14}
            alt="Client Name"
          />
            <img
              className="with-background height70"
              src={Client16}
              alt="Client Name"
            />
          <img
            className="client-image"
            src={Client15}
            alt="Client Name"
          />

        </div>
      </section>
    </div>
  );
};

export default Home;
