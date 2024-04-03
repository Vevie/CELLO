import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap"
import {FaUser} from "react-icons/fa";
import PetForm from './PetForm';
import {message } from 'antd';
import { useHistory } from "react-router-dom";

const EditPage = ({ match }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const userId = match.params.userId;
  const [messageApi, contextHolder] = message.useMessage();
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/${userId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error retrieving user:', error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleUpdateUser = async (userId, userData) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedUser = await response.json();
      setUsers(users.map(user => (user.id === userId ? updatedUser : user)));
      console.log('Pet updated successfully:', updatedUser);
      messageApi.open({
        type: 'success',
        content: 'Pet updated successfully',
      });
      // Delay the redirect
        setTimeout(() => {
        history.push('/dashboard');
      }, 2000);

    } catch (error) {
      console.error('Error updating pet:', error);
    }
  };


  return (
    <>
        {contextHolder}
        <Container fluid>
        <div className="bg-white shadow-sm py-4 px-0 px-md-4">
          <Container>
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="mb-0 custom-color fw-semibold">Edit</h5>
              <h6 className="text-center mb-0"><FaUser className="me-2 "/>Hi!, Dora</h6>
            </div>
          </Container>
        </div>
        <div className="mt-5">

        {user && <PetForm
            user={user}
            updateUser={handleUpdateUser}
            formMode="edit"
        />}
        </div>
        </Container>
    </>
  );
};

export default EditPage;
