import React from "react";
import {Button, Modal, Form, Row, Col} from "react-bootstrap"
import { message } from 'antd';
import usePetStore from "../../Store/pet-store";


const ModalForm = ({ show, handleModalClose }) =>  {

    const applicant = usePetStore((state) => state.applicant);

    const [name, setName] = React.useState(applicant? applicant.name : "");
    const [age, setAge] = React.useState(applicant? applicant.age : "");
    const [email, setEmail] = React.useState(applicant? applicant.email : "");
    const [phone, setPhone] = React.useState(applicant? applicant.phone : "");
    const [reason, setReason] = React.useState(applicant? applicant.reason : "");
    const [ownedPetBefore, setOwnedPetBefore]= React.useState(applicant? applicant.ownedPetBefore : "");



    const buttonDisabled = () => {
        return !name || !age || !email || !phone || !reason || !ownedPetBefore;
    };


    const checkEmail = async (email, applicantId) => {
      const response = await fetch(`http://localhost:3001/applicantsList?email=${email}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const applicantsList = await response.json();
      return applicantsList.some(applicant => applicant.id !== applicantId);
    };
      
    const checkPhone = async (phone, applicantId) => {
      const response = await fetch(`http://localhost:3001/applicantsList?phone=${phone}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const applicantsList = await response.json();
      return applicantsList.some(applicant => applicant.id!== applicantId);
    };

    const handleFormSubmit = async (event) => {
          event.preventDefault();

          const emailExists = await checkEmail(email, applicant?.id);
          const phoneExists = await checkPhone(phone, applicant?.id);
  
          if (emailExists || phoneExists) {
              message.error('Error! Email or phone number has a pending request.');
              return;
          }

          try {
            const response = await fetch("http://localhost:3001/applicantsList", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                age,
                email,
                phone,
                reason,
                ownedPetBefore,
              }),
            });
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }


            const newApplicant = await response.json();
            usePetStore.setState((state) => ({
                applicant: newApplicant,
                applicantsList: [newApplicant, ...state.applicantsList],
              }));

      
            message.success("Form submitted successfully");
            handleModalClose();
          } catch (error) {
            console.error("Error submitting form:", error);
            message.error("Failed to submit form");
          }
    };

    return(
        <Modal
            show={show} 
            onHide={handleModalClose}
            backdrop="static"
            keyboard={false}
            className="d-flex align-items-center justify-content-center"
        >
        <div className="px-3">
            <Modal.Header closeButton>
                <Modal.Title className="fs-5">Fill this Form</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <Form onSubmit={handleFormSubmit}>
                    <Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Jane" className="mb-3 rounded-pill" value={name} onChange={(event) => setName(event.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridOwner">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="30 years" className="mb-3 rounded-pill" value={age} onChange={(event) => setAge(event.target.value)}/>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="janedoe@cello.org" className="mb-3 rounded-pill" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="055-555-5555" className="mb-3 rounded-pill" value={phone} onChange={(event) => setPhone(event.target.value)}/>
                        </Form.Group>
                    </Row>

                    <Row>
                    <Form.Group as={Col} controlId="formGridReason">
                        <Form.Label>Why do you want to adopt this pet?</Form.Label>
                        <Form.Select className="mb-3 rounded-pill" value={reason} onChange={(event) => setReason(event.target.value)}>
                            <option value="" disabled>Select an option</option>
                            <option value="Security">Security</option>
                            <option value="Companion for myself">Companion for myself</option>
                            <option value="Breeding">Breeding</option>
                            <option value="Companion for other pet">Companion for other pet</option>  
                        </Form.Select>
                    </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridOwnedPetBefore">
                            <Form.Label>Have you owned a pet before?</Form.Label>
                            <Form.Select className="mb-4 rounded-pill" value={ownedPetBefore} onChange={(event) => setOwnedPetBefore(event.target.value)}> 
                                <option value="" disabled>Select an option</option>
                                <option value="YES">Yes</option>
                                <option value="NO">No</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Modal.Footer>
                        <Button 
                            type="submit" 
                            role="button"
                            className="btn-primary"
                            disabled={buttonDisabled()}
                            >
                            Submit
                        </Button>

                    </Modal.Footer>




                    </Form>
            </Modal.Body>

        </div>
        </Modal>
    );
};

export default ModalForm;