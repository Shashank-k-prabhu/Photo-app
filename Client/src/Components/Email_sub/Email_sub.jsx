import React from "react";
import './Email_sub.css';
import emailimage from "../Images/email.jpeg";

function Popup(props){
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <img src={emailimage} alt="" className="popup-image" />
                <h2>We really want you to want us! Subscribe below</h2>
                <div className="email-container">
                    <input type="email" placeholder="Email" className="email-input" />
                    <button type="submit" className="sub">SUBMIT</button>
                </div>
                
            </div>
            <button className="close" onClick={props.onClose}>X</button>
        </div>
    ) : null;
}

export default Popup;