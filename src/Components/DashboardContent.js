import React from "react";
import { Container } from "react-bootstrap"
import {FaUser} from "react-icons/fa";
import TableContent from "./Table";


const Content = () => {
    return (
      <>
      <Container fluid>
        <div className="bg-white shadow-sm py-4 px-0 px-md-4">
        <Container>
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="mb-0 custom-color fw-semibold">Dashboard</h5>
            <h6 className="text-center mb-0"><FaUser className="me-2 "/>Hi!, Dora</h6>
          </div>
        </Container>
        </div>

        <div className="mt-5 px-0 px-lg-3">
        <TableContent />
        </div>
      </Container>
      </>
    ); 
}

export default Content;