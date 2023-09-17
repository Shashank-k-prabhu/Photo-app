import React from "react";
import './Email_sub.css';

function Popup(props){
    return(props.trigger) ? (
        <div className="popup">
            <button className="close-btn" onClick={props.onClose}>X</button>
            <div className="popup-inner">
                <h2>We really want you to want us</h2>
                <p className="small-text">Enter your email address below:</p>
                <input type="email" placeholder="Email" className="email-input" />
            </div>
        </div>
    ) : null;
}

export default Popup;
