import React from "react";
import EnquiryForm from "./EnquiryForm";
import contactimage from "../../Components/Images/contact_page.png";
import "./Body.css";
import "./EnquiryForm.css"

function ContactBody() {
  return (
    <div className="body-container">
      <div className="background-container">
        <img src={contactimage} alt="Pic" className="imagestyles" />
      </div>
      <div className="form-align">
          <form className="form">
            <EnquiryForm />
          </form>
      </div>
    </div>
  );
}

export default ContactBody;
