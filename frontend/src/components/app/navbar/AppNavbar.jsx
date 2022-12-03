import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowRight } from "react-bootstrap-icons";
import { BsCart3 } from "react-icons/bs";
import "./navbar.css";

function AppNavbar() {
  const onCartClick = () => {}
  return (
    <Navbar className="Navbar-wrapper" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">Afik-Omer Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Main Page</Nav.Link>
            <Nav.Link href="#">Shopping cart</Nav.Link>
          </Nav>
          <Navbar.Text className="justify-content-end">
            <div id="shopping-cart-wrapper" onClick={onCartClick}>
              <BsCart3 size={23} />
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
