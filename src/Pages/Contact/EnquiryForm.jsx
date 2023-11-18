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
        <h1 className="enquiry-form">ENQUIRY FORM</h1>

        <label htmlFor="name" className="label">
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="box"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="phoneNumber" className="label">
          Phone Number:
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          className="box"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <label htmlFor="message" className="label">
          Your Message:
        </label>
        <textarea
          id="message"
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
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
