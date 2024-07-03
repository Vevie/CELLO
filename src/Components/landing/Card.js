import React from "react";
import {Card} from "react-bootstrap"


const Cards = ({image, title, text}) => {

    return(
        <Card className="mb-5 service-card">
        <Card.Body className="align-items-center pt-4">
          <Card.Title className="fw-semibold pb-2"><Card.Img variant="top" src={image} style={{ width: "40px", height: "40px" }} className="me-2" />{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default Cards;