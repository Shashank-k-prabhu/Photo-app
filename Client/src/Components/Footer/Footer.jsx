import React ,{useState} from "react";
import "./Footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin , faGithub } from '@fortawesome/free-brands-svg-icons';
import Popup from "../Email_sub/Email_sub";

function Footer() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
    <footer className="footer">
        <div className="container">
        <div className="contact-info left">
            <p>123 Kanakapura Road</p>
            <p>Bangalore,Karnataka,India</p>
            <p>Email id: pixelpals@gmail.com</p>
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()} PIXELPALS</p>
                <p>Designed by Shashank & Sneha</p>
            </div>
            <div className="right">
            <div className="subscription">
                <button onClick={openPopup}>Subscribe</button>
                <Popup trigger={isPopupOpen} onClose={closePopup}>
                    <h3>Email Subscription</h3>
                </Popup>
            </div>
            <div className="social-icons">
                <a href="#">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} /> 
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faGithub}/>                
                </a>
            </div>
            </div>
        </div>
    </footer>
);
}

export default Footer;
