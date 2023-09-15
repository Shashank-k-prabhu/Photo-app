import React from "react";
import "./Footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin , faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
    <footer className="footer">
        <div className="container">
            <div className="social-icons">
                <a href="#">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a  href="#">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faTwitter} /> {/* New Twitter icon */}
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} /> {/* New LinkedIn icon */}
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
