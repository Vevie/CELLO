import React, {useState, useEffect} from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom";



export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

    return(
      <Navbar expand="lg" fixed="top" className={isScrolled ? "shadow-sm" : ""} bg={isScrolled ? "white" : "transparent"}>
        <Container>
          <Navbar.Brand href="#home" className="mb-0 custom-color fw-bold fs-3">CELLO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100  align-items-center justify-content-end">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Services</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact ' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
              <Link to="/signIn">
                <Button className="btn btn-primary fw-semibold p-2 px-2" role="button">LOGIN / SIGN UP</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );

}


