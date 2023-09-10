import { Container } from "react-bootstrap";
import "./navabr.css"
import Navlinks from "./nav-links";
function Navbar(){
  return (
    <Container className="navabr" fluid>
      <div className="navbar-row">
        <div className="logo">
          <h1>PIXELPALS</h1>
        </div>
        <nav className="nav-links">
          <Navlinks name="HOME" />
          <Navlinks name="PORTFOLIO" />
          <Navlinks name="CONTACT" />
        </nav>
      </div>
    </Container>
  );

}
export default Navbar;