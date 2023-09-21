<<<<<<< HEAD

import "./EnquiryForm.css";

const EnquiryForm = () => {

  return (
    <div className="form-align">
      <form>
=======
import React, { useState } from "react";
import "./EnquiryForm.css";
import axios from "axios"; 

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post(
        "http://localhost:3001/api/enquiries", 
        formData
      );

      if (response.status === 201) {
        console.log("Enquiry submitted successfully");
        setFormData({ name: "", phoneNumber: "", message: "" });
      } else {
        console.error("Error submitting enquiry");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-align">
      <form onSubmit={handleSubmit}>
>>>>>>> 038ae1b62357f6fef2faf9f3f0d8dc539c7b0ccb
        <h1 className="enquiry-form">ENQUIRY FORM</h1>

        <label htmlFor="name" className="label">
          Your Name:
        </label>
        <input
          type="text"
          id="name"
<<<<<<< HEAD
          placeholder="Name"
          className="box"
=======
          name="name"
          placeholder="Name"
          className="box"
          value={formData.name}
          onChange={handleChange}
>>>>>>> 038ae1b62357f6fef2faf9f3f0d8dc539c7b0ccb
        />

        <label htmlFor="phoneNumber" className="label">
          Phone Number:
        </label>
        <input
          type="text"
          id="phoneNumber"
<<<<<<< HEAD
          placeholder="Phone Number"
          className="box"
=======
          name="phoneNumber"
          placeholder="Phone Number"
          className="box"
          value={formData.phoneNumber}
          onChange={handleChange}
>>>>>>> 038ae1b62357f6fef2faf9f3f0d8dc539c7b0ccb
        />

        <label htmlFor="message" className="label">
          Your Message:
        </label>
        <textarea
          id="message"
<<<<<<< HEAD
          placeholder="Message"
          className="msg"
        ></textarea>
        <button
          type="submit"
          style={{ borderRadius: "5px", marginLeft: "40%", marginTop: "5%" }}
=======
          name="message"
          placeholder="Message"
          className="msg"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          style={{
            borderRadius: "5px",
            marginLeft: "40%",
            marginTop: "5%",
          }}
>>>>>>> 038ae1b62357f6fef2faf9f3f0d8dc539c7b0ccb
        >
          SUBMIT
        </button>
      </form>
<<<<<<< HEAD
    </div> );
=======
    </div>
  );
>>>>>>> 038ae1b62357f6fef2faf9f3f0d8dc539c7b0ccb
};

export default EnquiryForm;
