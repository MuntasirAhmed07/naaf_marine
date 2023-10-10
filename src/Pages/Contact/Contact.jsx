import React, { useState } from "react";
import './contact.css';

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", { firstName, lastName, email, phone, message });
  };
  return (
    <div className="header">  
      <h2 className="underline"> Contact</h2>
      <section>
        <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-g`roup">
          <div className="fields">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="form-input"
          />
          </div>
          <div className="fields">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="form-input"
          />
          </div>
        </div>  
        <div className="form-group">
          <div className="feilds">

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form-input"
            />
            </div>
            <div>

          <label htmlFor="phone">Contact Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="form-input"
            />
            </div>
        </div>
        <div className="form-group-1">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="form-input"
          ></textarea>
        </div>

        <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
