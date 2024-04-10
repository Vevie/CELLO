import React, { useState }from 'react';
import { Container } from "react-bootstrap";
import PetForm from './PetForm';
import {FaUser} from "react-icons/fa";
import { message } from 'antd';
import { useHistory } from "react-router-dom";


const AddPage = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const checkEmail = async (email) => {
    const response = await fetch(`http://localhost:3001/users?email=${email}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.length > 0;
  };
  
  const checkPhone = async (phone) => {
    const response = await fetch(`http://localhost:3001/users?phone=${phone}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.length > 0;
  };

  const handleAddUser = async (userData) => {
    setIsLoading(true);

    const emailExists = await checkEmail(userData.email);
    const phoneExists = await checkPhone(userData.phone);
    if (emailExists || phoneExists) {
      setIsLoading(false);
      message.error( 'Error! Email or phone number already exists.');
      return;
    }

    try{
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newUser = await response.json();
      setUsers([...users, newUser]);

      console.log('Pet added successfully:', newUser);
      message.success('Pet added successfully');
      // Delay the redirect
      setTimeout(() => {
        history.push('/dashboard');
      }, 2000);

    } catch (error) {
      console.error('Error adding pet:', error);
      message.error( 'Error! Please fill all the fields');
    }

    if (editUser) {
      setEditUser(null);
    }
  };
  return (
    <>
      <Container fluid>
        <div className="bg-white shadow-sm py-4 px-0 px-md-4">
          <Container>
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="mb-0 custom-color fw-semibold">Add Pet</h5>
              <h6 className="text-center mb-0"><FaUser className="me-2 "/>Hi!, Admin</h6>
            </div>
          </Container>
        </div>

        <div className="mt-5">
        <PetForm
          addUser={handleAddUser}
          isLoading={isLoading}
          formMode="add"
        />

        </div>
      </Container>
    </>
  );
};

export default AddPage;