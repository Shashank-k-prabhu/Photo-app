import React from "react";
const EnquiryForm = () => {
  return (
    <div className="enquiry-form">
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone Number" />
        <textarea placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default EnquiryForm;