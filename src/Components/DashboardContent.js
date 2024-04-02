import React from "react";
import { Container,Navbar, Nav } from "react-bootstrap"
import {FaUser} from "react-icons/fa";
import TableContent from "./Table";


const Content = () => {
    return (
      <>
      <Container fluid>
      <Navbar expand="lg" className="bg-white shadow-sm px-3"> 
            <Container fluid>
            <Navbar.Brand href="#home" className="mb-0 custom-color fw-semibold">Dashboard</Navbar.Brand>
            <Nav className="me-auto w-100 align-items-center justify-content-end">
            <div className="d-flex align-items-center">
              <FaUser />
              <h6 class="ms-2 text-center mb-0">Hi! Dora</h6>
            </div>

            </Nav>
            </Container>
        </Navbar>

        <div className="mt-5 px-3">
        <TableContent />
        </div>
      </Container>
      </>
    ); 
}

export default Content;