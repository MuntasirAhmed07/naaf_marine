import React from "react";
import Ab1 from "../../Assets/About/about1.png";
import Ab2 from "../../Assets/About/about2.png";
import "./about.css";


const AboutUs = () => {
  return (
    <div className="header">
      <h2 className="underline"> About Us</h2>
      <div className="about-us">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
        />
        <p>
          NAAF MARINE GROUP consisting of NAAF MARINE SERVICES and NAAF MARINE
          LOGISTICS established in the year 2012 holding all necessary
          Certificates / Licenses to provide all kind of shipping related
          services such as Crew Management, Technical Management / ISM Manager
          etc., to the marine industry at home and abroad including Local
          Shipping Agency, Owner’s Protecting Agency, NVOCC Services & Logistic
          Supports at Chattogram, Mongla, Payra Bondar including Pangaon ICT &
          Other IWCT and private LPG Terminals. Our office is suitably located
          at Agrabad C/A, Chattogram, near the port premises.
          <br /> We are having a team of well qualified office staff led by
          highly experienced professionals from shipping background, having
          served on board in the top management level as Master (Captain) and
          Chief Engineer on various types of merchant vessels under the
          management of various well reputed shipping companies worldwide, which
          enhances the capabilities & performance of the company to deal with
          any shipping related matters. We pledge to offers a cost effective,
          reliable and trustworthy services with the entire satisfaction of our
          valuable clients / principals.
        </p>
      </div>
      <section className="registration">
        <h2 className="underline "> Registration</h2>
        <h4>
          Company Registration <br />
          Certificates and Licenses
        </h4>
        <p className="reg-para">
          Our company registered under the Law of the people’s republic of
          Bangladesh, holding all required Certificates to provide all kind of
          shipping related services to our principals at home & abroad. We are
          also holding Agency Licenses to operate the vessels in all Bangladeshi
          ports including Pangaon ICT & Other IWCT and private LPG Terminal.
        </p>
        <ul className="bullet">
          <li>Documents of Compliance (DOC) issued by Bureau Veritas (BV)</li>
          <li>MLC-200 Compliance issued by Bureau Veritas (BV)</li>
          <li>Manning License issued by the Director General of Shipping</li>
          <li>Shipping Agency License issued by Bangladesh Customs</li>
        </ul>
      </section>
      <section className="reg-img">
        <div class="reg-imgbox">
          <img
            src={Ab1}
            alt="Tajmahal"
          />
        </div>
        <div class="reg-imgbox">
          <img
            src={Ab2}
            alt="aboutus registration"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
