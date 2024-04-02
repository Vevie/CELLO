import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import Cards from "./Card"



const cardDetails =[
    {
        id: 1,
        image: require("../assests/opdcon.svg").default,
        title: "Pet Consultation",
        text: "Get your pet checked by the best doctors in the city"
    },
    {
        id: 2,
        image: require("../assests/pet-grom.svg").default,
        title: "Pet Grooming",
        text: "Get your pet checked by the best doctors in the city"
    },
    {
        id: 3,
        image: require("../assests/surges.svg").default,
        title: "Pet Nutrition",
        text: "Get your pet checked by the best doctors in the city"
    },
    {
        id: 4,
        image: require("../assests/pet-food.svg").default,
        title: "Pet Nutrition",
        text: "Get your pet checked by the best doctors in the city"
    },
    {
        id: 5,
        image: require("../assests/emerg.svg").default,
        title: "Pet Nutrition",
        text: "Get your pet checked by the best doctors in the city"
    },
    {
        id: 6,
        image: require("../assests/vaccine.svg").default,
        title: "Pet Nutrition",
        text: "Get your pet checked by the best doctors in the city"
    }
]

const Services = () => {

    return(
        <div id="services">

        <Container >
            <h6 className="mt-5 custom-color text-center">Our Services</h6>
            <h2 className="mb-4 fw-semibold text-center">All Pet Care Services</h2>

            <Row>
            {cardDetails.map((card) => (
                <Col key={card.id} xs={12} md={6} lg={4}>
                    <Cards {...card} />
                </Col>
            ))}
            </Row>


        </Container>
        </div>

    );
}
export default Services;