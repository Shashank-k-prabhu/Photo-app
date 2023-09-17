import React ,{useState} from "react";
import "./Footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin , faGithub } from '@fortawesome/free-brands-svg-icons';
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
             <button onClick={openPopup}>Subscribe</button>
                <Popup trigger={isPopupOpen} onClose={closePopup}>
                    <h3>Email Subscription</h3>
                </Popup>
            <div className="social-icons">
                <a href="#">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a  href="#">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faTwitter} /> 
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} /> 
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faGithub}/>                
                </a>
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()} PIXELPALS</p>
                <p>Designed by Shashank & Sneha</p>
            </div>
        </div>
    </footer>
);
}

export default Footer;
