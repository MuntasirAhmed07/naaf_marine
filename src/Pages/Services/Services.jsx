import React from "react";
import Diagram from "../../Assets/Services/diagram.png";
import Services3 from "../../Assets/Services/services3.png";
import Hero from "../../Assets/Services/servicesHero.png";
import Services4 from "../../Assets/Services/sevices4.png";


import "./servives.css";
const Services = () => {
  return (
    <div className="service">
      <div
        className="hero"
        style={{ backgroundImage: `url(${Hero})`, backgroundSize: "cover" }}
      >
        <div className="hero-title">
          <h2>Serivces</h2>
        </div>
      </div>
      <section>
        <img className="graph" src={Diagram} alt="" />
      </section>
      <section className="service-wrapper">
        <div className="our-core-service">
          <img src={Diagram} alt="" />
        </div>
        <div className="text-wrapper">
          <h4>Our core services</h4>
          <p className="service-para">Our core services are as follows:</p>
          <ul className="bullet2">
            <li>Ship manning / Crew Management.</li>
            <li>Technical Management (ISM Manager).</li>
            <li>Shipping Agency / Owner’s Protecting Agency.</li>
            <li>Non-Vessel Operating Common Carrier (NVOCC).</li>
            <li>Marine Survey & Inspection.</li>
            <li>Repair & Logistics Support.</li>
            <li>Food & Catering Services.</li>
          </ul>
        </div>
      </section>
      <section className="service-wrapper">
        <div className="text-wrapper">
          <h4>Value Added Services</h4>
          <p className="service-para">
            We also provide following value added services:
          </p>
          <ul className="bullet2">
            <li>Ship Repair, Workshop and Dry-Docking arrangement</li>
            <li>
              Marine Survey & Inspections, On/Off Hire & bunker survey etc.
            </li>
            <li>Pre-purchase inspections, Condition survey & Assessment .</li>
            <li>
              Ship Chartering and Brokering and / or Consultancy services .
            </li>
            <li>
              Brokering, Consultancy services in Sale-purchasing of vessels.
            </li>
            <li>
              Filing Agent for MARSHALL ISLAND for COC & COR for seafarers .
            </li>
            <li>
              Vessel’s Registration and COC & COR for Seafarers from FOC of
              Marshall Island,
              <br /> Panama, Belize and Honduras etc.
            </li>
            <li>
              Conduct Flag State Survey & Inspections for Panama, St. Vincent &
              the Grenadines,
              <br /> Belize, Tanzania & Togo flagged vessels as Country
              Representative of MACOSNAR
              <br /> Corporation and authorized Marine Surveyor.
            </li>
          </ul>
        </div>
        <div className="our-core-service">
          <img src={Hero} alt="" />
        </div>
      </section>
      <section className="service-details-wrapper">
        <h4>Service Details</h4>
        <p>
          <strong>Ship Manning / Crew Management</strong>: For many generations,
          Bangladesh has had an enviable international reputation for its
          ability to provide huge number of highly-trained and well experienced
          seafarers of all grade at a very reasonable cost. We offer a quality
          Crew manning service to the ship Owners / Managers as per their
          requirements in accordance with the guidance of STCW 2010 standards.
          We provide professionally well qualified, experienced and hardworking
          Bangladeshi Seafarers. Our officers are holding Certificate of
          Competency (COC) from Bangladesh, Singapore, United Kingdom, Malaysia,
          Panama etc., Our Ratings are well trained, experienced and hardworking
          with institutional background and Cadets from Bangladesh Marine
          Academy – highly motivated, Safety & Environmental conscious marine
          personnel to various Shipping Companies worldwide.{" "}
        </p>
      </section>
      <section className="service-details-wrapper align">
        <div>
          <p>
            <strong>Technical Management</strong>: We intend to consolidate our
            services by giving one-stop-services to our principals at home and
            abroad. We offer a tailor-made Technical Management service designed
            to suit our client’s specific requirements with competent, safe and
            cost-effective services including implementation & monitoring of ISM
            & ISPS on board.
          </p>
          <p className="service-para">
            Our Technical Services includes but not limited to following:
          </p>
          <ul className="bullet2">
            <li>
              Technical supervision for compliance of International rules and
              regulations,
            </li>
            <li>Vessel registration, documentation and certification.</li>
            <li>
              Renewal of statutory certificates and Classification survey
              attendance.
            </li>
            <li>Planned maintenance system implementation and monitoring.</li>
            <li>
              Vessel repairs and dockings with vessel’s Flag and Class liaison.
            </li>
            <li>24/7 technical support, including on site attendance.</li>
            <li>
              Implementation of ISM & ISPS on board as per the respective code.
            </li>
            <li>
              Carry out Internal Auditing & corrective action implementation.
            </li>
            <li>
              Safety and security assessments and awareness training as
              required.
            </li>
            <li>Dry-Docking arrangement and supervision at home & abroad.</li>
            <li>
              Arrangement of Bunker FO, DO, LO, Hydraulic oil, Lubes and
              Chemicals etc.
            </li>
            <li>
              Planning and supervision of ships budget, financial forecasts and
              variance reports.
            </li>
          </ul>
          <p className="service-para service-space">
            Additionally, arrange following services on owner request:
          </p>
          <ul className="bullet2">
            <li>Supply of Store, Spares & Provision</li>
            <li>P&I Survey & Inspection</li>
            <li>H&M Survey & Inspection</li>
            <li>Crew change & Repatriation</li>
            <li>Ship Sale & Purchasing/brokering</li>
            <li>LSA & FFA servicing</li>
            <li>Navigation / IT service</li>
          </ul>
        </div>
        <div className="service-details">
          <img src={Hero} alt="" />
        </div>
      </section>
      <section className="service-details-wrapper">
        <p>
          <strong>Local Shipping Agency / Owner’s Protecting Agency</strong>: We
          are fully licensed shipping agent operating at all sea ports of
          Bangladesh, i.e., Chattogram, Mongla, Payra Bondar including Pangaon
          ICT, other IWCT and private LPG terminals. Our office staffs are well
          versed and fully conversant with the Rules & Regulations applicable to
          Port, Custom & Mercantile Marine office, Shipping Office and DG Office
          at Department of Shipping. We are acting on behalf of the Owner /
          Manager / Operator of the vessel, organize & co-ordinates all aspects
          of vessel's port of call, offer a comprehensive range of port agency
          services, in order to facilitate a hassle-free port visit to our
          valued principal's vessel and its crew. As a local representative of
          the principal, we also provide local knowledge and expertise and
          ensures that the principal's requirements are performed with the
          utmost efficiency and dispatch.
        </p>
        <p>
          <strong>Non-Vessel Operating Common Carrier (NVOCC)</strong>: We have
          started NVOCC services to our various foreign principals under the MLO
          code of POL & DLL.
        </p>
      </section>
      <section className="service-wrapper-r">
        <div className="our-core-service">
          <img src={Services3} alt="" />
        </div>
        <p>
          <strong>Marine Survey & Inspection</strong>: We have a pool of Marine
          Surveyors for light/load draft condition, Bunker Survey (Off hire/on
          hire), Pre Shipment inspection of cargo, Damage Surveys (Hull &
          Machinery), Lashing and Securing of Cargoes, Cargo and Cargo post
          landing inspection, Cargo Damage and Average adjustment, Container
          inspection or survey, Cargo lifting gear and other equipment’s survey,
          Reefer hold and reefer container survey, Dangerous Goods Survey, Break
          Bulk Survey, Evaluation of General condition of ship, Pre voyage
          inspection of shipment insurance & Hull & Machinery Underwriter's
          condition etc. We are also providing Vessel procurement including
          Brokering, Consultancy services Pre-purchase inspections, condition
          survey and assessment.
        </p>
      </section>
      <section className="service-details-wrapper">
        <p>
          <strong>Repair & Logistics Support</strong>: We provide quality
          assured logistics support to marine industry and to our clients by
          arranging international & Class standard repairs and modifications
          using a dedicated team of technicians, supervisors, Class approved
          welders and experienced work force. Also arranging to supply any
          stores, equipment for ports & harbour uses such as Cranes of all
          types, Fork-lift, Air compressor, Truck / Trailer, Material-handling
          machines etc., and other related equipment.
        </p>
        <p>
          Our main objective is to work in partnership with our clients to
          optimize their operational efficiency and ensuring the standards of
          safety, healthy environmental protection and quality are maintained.
          Your safety is our priority.
        </p>
      </section>
      <section className="service-wrapper-l">
        <p>
          <strong>Food & Catering Services</strong>: We have started exploring
          our business on Food and Catering service by opening a beautiful and
          spacious multi-cuisine restaurant by the name Captains Dine Restaurant
          having classic ROOF TOP LOUNGE in a suitable location at Halishahar
          Housing Estate, Block – K (Artillery Moor), P. C. Road, Halishahar -
          Chattogram, serving mainly Asian Cuisine with Indian, Thai & Chinese
          foods of your choice and appetite. We can accommodate more than 300+
          guest at a time in addition of 50+ guest at the Roof Top Lounge.{" "}
          <br /> Captains Dine Restaurant will be the best choice for any
          get-together such as Conference, Seminar, Wedding / Reception,
          Anniversary, Birthday, Festivals etc. You are welcome to visit our
          restaurant any time at your convenience. <br /> Please visit for
          details : www.captainsdine.com
        </p>
        <div className="our-core-service">
          <img src={Services4} alt="" />
        </div>
      </section>
      <section className="service-end">
        <div className="text-wrapper">
          <h4>Service Status</h4>
          <p className="service-para">
            In addition of Crew management i.e. Manning the various principal’s
            vessels worldwide, we are providing following services to our
            valuable principals:
          </p>
          <ul className="bullet2">
            <li>
              Technical Manager of following two Panamanian Tanker vessels
              namely M/T SOCHIMA and ROSE MARY, operating in West African coast,
              owned by M/S TONIMAS Nigeria Limited, Lagos, Nigeria.
            </li>
            <li>
              Technical Manager and Crew Manager for a Bangladeshi flagged bulk
              carrier M/V PRIDE OF YASNA trading worldwide, Owned by M/S
              Sunshine Navigation International Limited, Dhaka, Bangladesh.
            </li>
            <li>
              NVOCC : NVOCC services to various foreign principals under the MLO
              code of POL & DLL, mainly to Allied Container Line, Karachi -
              Pakistan; More Container Line – India; and KN Ocean Private Ltd.,
              - India.
            </li>
            <li>
              Shipping Agent for SIAM Lucky Marine Co. Ltd (Thailand) for their
              LPG Tanker vessels visiting Chattogram port (@ JMI, BM Energy
              Terminals & UniGas).
            </li>
            <li>
              Logistics service as local vendor to EXCELERATE ENERGY in
              Bangladesh with supplying Crane, Fork-lift, Air compressor, Truck
              / Trailer and other equipment etc.
            </li>
            <li>
              Logistics service as local vendor to CDDL (Chattogram Dry Dock
              Ltd.) for repair & supply etc.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;
