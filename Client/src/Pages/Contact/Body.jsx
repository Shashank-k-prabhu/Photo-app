import React from "react";
import EnquiryForm from "./EnquiryForm";
import './Body.css';
const Body = () => {
  return (
    <div>
      
        <p className="content">HAVE SOME QUESTIONS?</p>
        <p className="text"> We're here to help! Please feel free to reach out to us by filling out the enquiry form.</p>
      
      <EnquiryForm />
    </div>
  );
};
export default Body;