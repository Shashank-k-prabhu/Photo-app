import React from "react";
import EnquiryForm from "./EnquiryForm";
import contactimage from "D:/Desktop/intern_proj/Photo-app/Client/src/Components/Images/contact_page.png";
import "./Body.css";

function ContactBody() {
  return (
    <div className="container">
      <div className="background-container">
        <img src={contactimage} alt="Pic" className="imagestyles" />
      </div>
      <div className="form-align">
        <div className="form-div">
          <form className="form">
            <EnquiryForm />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactBody;
