import React from 'react';
import SignInForm from './SignInForm';
import {Row , Col, Image} from 'react-bootstrap';
import curvedbg from '../assests/sider.png'
import { Link } from "react-router-dom";


const SignIn = () => {
    return (
        <div className="d-flex align-items-center justify-content-center signIn-container px-3 px-lg-5">
            <div class="content rounded-4">
                <Row className="h-100">
                    <Col sm={12} lg={5} className="h-100">
                        <div className="paw-bg h-100">
                            <Link to="/" className="text-black">
                                <i class="fa fa-arrow-left mb-2 ps-4 pt-5" aria-hidden="true"></i>
                            </Link>
                        <div className="p-5">
                            <h2 class="custom-color fw-semibold">Welcome!</h2>
                            <p>Please enter your details</p>
                            <SignInForm />
                        </div>
                        </div>
                    </Col>

                    <Col sm={7}>
                        <div class="sider-image d-none d-lg-block h-100">
                            <Image src={curvedbg}   />
                        </div>
                    </Col>
                </Row>
            
            </div>
        </div>
    );
};

export default SignIn;
