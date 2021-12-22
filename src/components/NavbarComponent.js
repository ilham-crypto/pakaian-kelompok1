import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Container, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="fixed-top"
    >
      <Container>
        <Navbar.Brand href="/" className="bc">
          <strong>Zanda</strong>
          <br />
          <div style={{ marginTop: "-10px", marginLeft: "30px" }}> STORE</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Navbar.Text>
            <a href="/OrderCart">
              <Button
                variant="outline-light"
                style={{ padding: "15px", borderRadius: "20px" }}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <u> Cart Orderan</u>
              </Button>
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
