import React from "react"
import Header from "./Header"
import Body from "./Body"
import EnquiryForm from "./EnquiryForm"
const Contact = ()=>{
  return (
    <div>
      <Header />
      <Body>
        <EnquiryForm/>
      </Body>
    </div>
  );
}
export default Contact;