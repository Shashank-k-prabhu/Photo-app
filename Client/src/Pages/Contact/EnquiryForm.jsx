import React from "react";
import "./EnquiryForm.css";
const EnquiryForm = () => {
  return (
  <form>
    <div>
        <h1><span className="enquiry-form">ENQUIRY FORM</span></h1>
      
        <label htmlFor="name" className="label">Your Name:</label>
        <input type="text" id="name" placeholder="Name" className="box"/>

        <label htmlFor="phoneNumber" className="label">Phone Number:</label>
        <input type="text" id="phoneNumber" placeholder="Phone Number" className="box" />

        <label htmlFor="message" className="">Your Message:</label>
        <textarea id="message" placeholder="Message"className="msg"></textarea>
        <button type="submit"><center>SUBMIT</center></button>
    </div>
  </form>
    
  );
};
export default EnquiryForm;

