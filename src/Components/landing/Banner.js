import React from "react";
import { Container} from "react-bootstrap";
import { FaPaw } from "react-icons/fa";



export const Banner = () => {

    return(
        <div className="banner" id="home">
        <Container fluid>
            <div className="text-start text-md-center mt-5 p-lg-5 mt-md-1"> 
                <div className="pt-5 custom-color">
                    <h2 className="fw-semibold">The World's Best Team </h2>
                    <h2 className="fw-semibold">for Pet Care Services</h2>
                </div>
                <p class="py-3">
                    Cello is the first tech-integrated chain of modern clinics to cater to all your pet needs.
                </p>
                <button type="button" className="btn btn-primary fw-semibold p-2 px-2 text-center align-items-center"> 
                    <FaPaw  className="me-2 text-warning"/>
                    Our Services
                </button>
            </div>
        </Container>
        </div>

    );
}