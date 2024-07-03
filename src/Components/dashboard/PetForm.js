import React,{useEffect} from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import { message } from 'antd';
import usePetStore from "../../Store/pet-store";


const PetForm = ({ updatePet, isLoading, addPet, formMode}) => {

    const pet = usePetStore((state) => state.pet);

    const [petName, setPetName] = React.useState(pet? pet.petName : "");
    const [petAge, setPetAge] = React.useState(pet? pet.petAge : "");
    const [price, setPrice] = React.useState(pet? pet.price : "");
    const [status, setStatus] = React.useState(pet? pet.status : "");
    const [doctor, setDoctor] = React.useState(pet? pet.doctor : "");
    const [imageFile, setImageFile] = React.useState(pet? pet.imageFile : "");

    useEffect(() => {
        if (pet) {
            setPetName(pet.petName);
            setPetAge(pet.petAge);
            setPrice(pet.price);
            setStatus(pet.status);
            setDoctor(pet.doctor);
            setImageFile(pet.imageFile);
        }
    }, [pet]);

    const buttonDisabled = () => {
        return !petName || !petAge  || !imageFile || !price  || !status || !doctor;
    };
    

    const handleSubmit = (event) => {
        event.preventDefault(); 
        try{

            if (!petName || !petAge || !imageFile || !price || !status || !doctor ) {
                message.error( 'Error ! Please fill in all fields');

                return;
            }
            
            if (pet) {
                updatePet(pet.id, { petName, petAge, imageFile, price, status, doctor });
            } else {
                addPet({ petName, petAge, imageFile, price, status, doctor });
            }
            
        } catch (error){
            console.error('Error', error);
           

        }
    };



    return(
        <div className="bg-white rounded-4 p-3 border pet-form mb-4" id="petform">
            <h4 class="mb-4 custom-color fs-5 fs-md-4" id="form-title">{formMode === 'edit' ? 'Edit Pet' : 'Add a New Pet'}</h4>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} controlId="formGridPetName">
                        <Form.Label>Pet Name</Form.Label>
                        <Form.Control type="text" placeholder="Jane" className="mb-3 rounded-pill" value={petName} onChange={(event) => setPetName(event.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPetAge">
                        <Form.Label>Pet Age</Form.Label>
                        <Form.Control type="text" placeholder="9 months" className="mb-3 rounded-pill" value={petAge} onChange={(event) => setPetAge(event.target.value)}/>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridImage">
                        <Form.Label>Add Image Url</Form.Label>
                        <Form.Control type="text" placeholder="https://" className="mb-3 rounded-pill"  value={imageFile} onChange={(event) => setImageFile(event.target.value)} />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="500" className="mb-3 rounded-pil" value={price} onChange={(event) => setPrice(event.target.value)}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Select value={status} onChange={(event) => setStatus(event.target.value)} className="mb-3 rounded-pill">
                            <option value="" disabled>Select</option>
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridAssignedDoctor">
                        <Form.Label>Assigned Doctor</Form.Label>
                        <Form.Select value={doctor} onChange={(event) => setDoctor(event.target.value)} className="mb-3 rounded-pill">
                            <option value="" disabled>Select a doctor</option>
                            <option value="Dr. John">Dr. John</option>
                            <option value="Dr. Smith">Dr. Smith</option>
                            <option value="Dr. Han">Dr. Han</option>
                            <option value="Dr. Johnson">Dr. Johnson</option>
                            <option value="Dr. Nazir">Dr. Nazir</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                <Button
                    type="submit"
                    className="btn btn-primary px-3 me-2"
                    disabled={isLoading || buttonDisabled()}
                >
                {isLoading ? 'Saving...' : 'Save'}
                </Button>
                </div>
                    
            </Form>
        </div>

    );
};

export default PetForm;