import React from "react";
import "./EnquiryForm.css";
const EnquiryForm = () => {
  return (
 <div className="form-align"  >
  <form>
    
      
        <h1 className="enquiry-form">ENQUIRY FORM</h1>
      
        <label htmlFor="name" className="label">Your Name:</label>
        <input type="text" id="name" placeholder="Name" className="box"/>

        <label htmlFor="phoneNumber" className="label">Phone Number:</label>
        <input type="text" id="phoneNumber" placeholder="Phone Number" className="box" />

        <label htmlFor="message" className="label" >Your Message:</label>
        <textarea id="message" placeholder="Message"className="msg"></textarea>
        <button type="submit" style={{borderRadius:'5px',marginLeft:'40%',marginTop:'5%'}}>SUBMIT</button>
    
  </form>
  </div> 
    
  );
};
export default EnquiryForm;

