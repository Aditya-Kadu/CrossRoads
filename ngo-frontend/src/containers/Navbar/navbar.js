import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function NavComponent() {
  const auth = localStorage.getItem("Volunteer");
  const auth2 = localStorage.getItem("NGO");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  const nav = () => {
    if (auth) {
      navigate("/volunteer/profile");
    } else if (auth2) {
      navigate("/ngo/profile");
    }
  };
  return (
    <Navbar bg="light" expand="md" className="p-0" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image
            src={logo}
            className={"img-width"}
            alt="Logo"
            fluid
            id="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="/ngolist">NGO List </Nav.Link>

            <Nav.Link href="/volunteer/profile">Events</Nav.Link>
          </Nav>
          <Nav className="justify-content-end pe-5">
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            {auth || auth2 ? (
              <div className="row">
                <div className="col px-4">
                  <Nav.Link onClick={nav}>Profile </Nav.Link>
                </div>
                <div className="col">
                  <Nav.Link onClick={logout}>Logout </Nav.Link>
                </div>
              </div>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
