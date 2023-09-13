import { Container } from "react-bootstrap";
import {Link} from 'react-router-dom';
import "./navabr.css"
import Navlinks from "./nav-links";
function Navbar(){
  return (
    <Container className="navabr" fluid>
      <div className="navbar-row">
        <div className="logo">
          PIXELPALS
        </div>
        <nav className="nav-links">
          
          <Navlinks name="HOME" />
          <Navlinks name="PORTFOLIO" />
          
          <Link to="/Contact">CONTACT US</Link>
          
        </nav>
      </div>
    </Container>
  );

}
export default Navbar;