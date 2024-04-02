import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap"
import maltesedog from "../assests/maltese.png"

const Gromming = () => {

    return(
        <>

        <Container fluid className="p-0 overflow-hidden">
            <div className="desc-section d-flex align-items-center justify-content-between px-5">
            <h1>C</h1>
            <h1>E</h1>
            <h1>L</h1>
            <h1>L</h1>
            <h1>O</h1>
            </div>
        </Container>

        <Container fluid className="p-0 overflow-hidden">
        <div className="gromming-section">
            <div className="d-flex align-items-center text-center px-5 px-md-1 justify-content-center h-100">
            <Row>
                <Col xs={12} md={6} lg={7}>
                    <Image src={maltesedog}  className="w-75 pt-3" />
                </Col>
                <Col xs={12} md={6} lg={5}>
                    <div className="pt-5 text-start">
                    <h1 class="fw-semibold fs-2 fs-md-1">Pet Gromming Service</h1>
                    <div>
                        <h5 class="pb-3 fs-6 fs-md-5">Bathing - wash and fluff dry</h5>
                        <h5 class="pb-3 fs-6 fs-md-5">Pawdicure – nail trimming and filing</h5>
                        <h5 class="pb-3 fs-6 fs-md-5">Breed specific styling, cutting and stripping</h5>
                        <h5 class="pb-3 fs-6 fs-md-5">De-matting and detangling</h5>
                    </div>
                    </div>
                </Col>
            </Row>
            
            </div>
        </div>
        </Container>



        </>


    );
}
export default Gromming;