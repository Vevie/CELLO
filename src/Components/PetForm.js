import React,{useEffect} from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import { message } from 'antd';


const PetForm = ({ user, userId, updateUser, addUser, resetForm, onReset, formMode}) => {
    const [petName, setPetName] = React.useState(user? user.petName : "");
    const [owner, setOwner] = React.useState(user? user.owner : "");
    const [email, setEmail] = React.useState(user? user.email : "");
    const [phone, setPhone] = React.useState(user? user.phone : "");
    const [doctor, setDoctor] = React.useState(user? user.doctor : "");

    const [messageApi, contextHolder] = message.useMessage();
    
    useEffect(() => {
        if (resetForm) {
            setPetName("");
            setOwner("");
            setEmail("");
            setPhone("");
            setDoctor("");
            onReset(); 
        }
    }, [resetForm, onReset]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!petName || !owner || !email || !phone || !doctor) {
            messageApi.open({
                type: 'error',
                content: 'Error ! Please fill in all fields.',
            });
            return;
        }

        if (user) {
            updateUser(user.id, { petName, owner, email, phone, doctor });
        } else if (userId) { 
            updateUser(userId, { petName, owner, email, phone, doctor }); 
        } else {
            addUser({ petName, owner, email, phone, doctor });
      
        }
      };


    return(
        <div className="bg-white rounded-4 p-3 border pet-form mb-4" id="petform">
            <h4 class="mb-4 custom-color fs-5 fs-md-4" id="form-title">{formMode === 'edit' ? 'Edit Pet' : 'Add a New Pet'}</h4>
            {contextHolder}
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Pet Name</Form.Label>
                        <Form.Control type="text" placeholder="Jane" className="mb-3 rounded-pill" value={petName} onChange={(event) => setPetName(event.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridOwner">
                        <Form.Label>Owner</Form.Label>
                        <Form.Control type="text" placeholder="Doe" className="mb-3 rounded-pill" value={owner} onChange={(event) => setOwner(event.target.value)}/>
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
                    <Form.Group as={Col} controlId="formGridAssignedDoctor">
                        <Form.Label>Assigned Doctor</Form.Label>
                        <Form.Control type="text" placeholder="Dr. Peter White" className="mb-3 rounded-pill" value={doctor} onChange={(event) => setDoctor(event.target.value)}/>
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button type="submit" className="btn btn-primary px-3 me-2" id="savenewUsersBtn" disabled={!petName || !owner || !email || !phone || !doctor}>Save</Button>

                </div>
                    
            </Form>
        </div>

    );
};

export default PetForm;