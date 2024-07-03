import React, {useState} from "react";
import {Card, Button, Badge} from "react-bootstrap"
import ModalForm from './adoptModalForm'


const AdoptCards = ({ petName, petAge, price, status, imageFile}) => {

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);


  const getStatusClass = () => {
    if (status === "Available") {
      return "success";
    } else if (status === "Not Available") {
      return "danger";
    } else {
      return "";
    }
  };


    return(
        <Card className="mb-5 adoptcard shadow-sm">
        <Card.Img variant="top" className="w-100 h-75 object-fit-cover" src={imageFile ? imageFile: 'placeholder_image_url'}/>
        <Card.Body className="py-3">
          <div className="d-flex align-items-center justify-content-between mb-2">
              <Card.Title className="fw-semibold mb-0">{petName},<span className="fw-lighter fs-6"> {petAge}</span> </Card.Title>
              <Badge className="small price-bg text-black fw-light">Ghc {price}</Badge>

          </div>
          <div className="d-flex align-items-center justify-content-between"> 
            <Badge pill className={`px-3 text-black-50 fw-light ${getStatusClass()}`}>
              {status}
            </Badge>
          <Button className="btn btn-primary fw-semibold py-1 px-3" onClick={handleModalShow} role="button" >Adopt</Button>
          </div>



          <ModalForm
            show={showModal} 
            handleModalClose={handleModalClose}
          />

        </Card.Body>
      </Card>
    );
};

export default AdoptCards;