import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap"
import {Form, Button} from "react-bootstrap"
import groupdogs from "./../../assests/groupdogs.png"

const Contact = () => {

    return(
        <div id="contact" className="pt-5">
        <Container>
            <Row>
                <Col xs={12} md={6} lg={6}>
                    <h3 className="fw-bold">Welcome To Our Family</h3>
                    <p className="custom-color">Cello is the first tech-integrated chain of modern clinics to cater to all your pet needs such as wellness, consultations, grooming and nutrition.</p>

                    <Row>
                        <Col sm={10}>
                            <Form.Group>
                                <Form.Label className="form-label">Full Name</Form.Label>
                                <Form.Control type="text" className="form-control mb-3" placeholder="Eg. Cello" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                        <Form.Group className="form-label">
                            <Form.Label className="form-label">Email</Form.Label>
                            <Form.Control type="email" className="form-control mb-3" placeholder="example@email.com" />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                        <Form.Group className="form-label">
                            <Form.Label className="form-label">Phone</Form.Label>
                            <Form.Control type="text" className="form-control mb-3" placeholder="Eg. 0545938774" />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Button variant="primary" className="py-2 px-4" type="submit">
                            CONTACT
                        </Button>
                        </Col>
                    </Row>

                </Col>

                <Col xs={12} md={6} lg={6}>
                    <div className="d-none d-md-block w-100 w-lg-75">
                        <Image src={groupdogs}  className="w-100" />
                    </div>
                </Col>
            </Row>
        </Container>

        </div>


    );
}
export default Contact;