import { Container } from "react-bootstrap";
import "./navabr.css"

import { Link } from "react-router-dom";
import Navlinks from "./nav-links";
function Navbar(){
  return (
    <Container className="navabr" fluid>
      <div className="navbar-row">
        <div className="logo">PIXELPALS</div>
        <nav className="nav-links">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navlinks name="Home" />
          </Link>
          <Link to="/portfolio" style={{ textDecoration: "none" }}>
            <Navlinks name="Portfolio" />
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Navlinks name="Contact" />
          </Link>
        </nav>
      </div>
    </Container>
  );
  
}
export default Navbar;