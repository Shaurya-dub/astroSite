import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function NavBar() {
  return (
    <Navbar variant='dark' className="navigation" expand="lg">
      <Container className="navigationContainer">
        <Navbar.Brand href="#home">Astro Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="#link">Book</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          <button className="signIn">Sign-in</button>{" "}
      </Container>
    </Navbar>
  );
}

export default NavBar;
