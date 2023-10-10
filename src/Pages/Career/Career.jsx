import axios from 'axios';
import React, { useState } from "react";
import "./career.css";

const Career = () => {
    const [formData, setFormData] = useState({
        name: '',
        rank: '',
        phone: '',
        dateOfBirth: '',
        email: '',
        experience: '',
        salary: '',
        file: null
      });



      const handleChange = event => {
        // setFormData({ ...formData, [event.target.name]: event.target.value });
        if (event.target.name === 'file') {
            setFormData({ ...formData, [event.target.name]: event.target.files[0] });
          } else {
            setFormData({ ...formData, [event.target.name]: event.target.value });
          }
        // console.log(formData);
      };

      const handleSubmit = event => {
        event.preventDefault();
    
        const data = new FormData();
        data.append('name', formData.name);
        data.append('rank', formData.rank);
        data.append('phone', formData.phone);
        data.append('dateOfBirth', formData.dateOfBirth);
        data.append('email', formData.email);
        data.append('experience', formData.experience);
        data.append('salary', formData.salary);
        data.append('file', formData.file);
    
console.log("data  namess" + data.name);
console.log("data " + data.file);

        axios.post('https://2aab-45-127-50-41.ap.ngrok.io/sendEmail', data)
          .then(response => {
            console.log("response.data");
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      };

  return (
    <div className="header">
      <h2 classNaåme="underline"> CAREER</h2>
      <div className="career-container">
        <div className="cv">
          <img src="" alt="" />
          <button>Download CV Format</button>
          <p>
            *After Downloading the CV format, Please fill it up upload it here
          </p>
        </div>
        <div className="career-form-container">
          <form>
            <div className="career-wrapper">
              <div className="career-box">
                <input type="text" name="name" value={formData.name} onChange={handleChange} id="name"  />
                <label for="name">First Name</label>
              </div>
            </div>
            <div className="career-wrapper">
              <div className="career-box">
                <input type="text" name="rank" value={formData.rank} onChange={handleChange} id="rank"  />
                <label for="rank">Rank</label>
              </div>
            </div>
            <div className="career-wrapper">
              <div className="career-box">
                <input type="number" name="phone" value={formData.phone} onChange={handleChange} id="phone"  />
                <label for="phone">Phone Number</label>
              </div>
            </div>
            <div className="career-wrapper">
              <div className="career-box">
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} id="dateOfBirth"  />
                <label for="dateOfBirth">Date of birth</label>
              </div>
            </div>
            <div className="career-wrapper">
              <div className="career-box">
                <input type="email" name="email" value={formData.mail} onChange={handleChange} id="mail"  />
                <label for="mail">Email</label>
              </div>
            </div>
            <div className="career-wrapper">
              <div className="career-box">
                <input type="number" name="experience" value={formData.experience} onChange={handleChange} id="experience"  />
                <label for="experience">Experience</label>
              </div>
            </div>
            <div className="career-wrapper">
              <div className="career-box">
                <input type="number" name="salary" value={formData.salary} onChange={handleChange} id="first-name"  />
                <label for="salary">Salary Expectation</label>
              </div>
            </div>
            <input type="file" name="file" onChange={handleChange} />
            <input type="submit" name="" value="Submit" onClick={handleSubmit}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
