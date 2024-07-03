import React, { useState }from 'react';
import { Container } from "react-bootstrap";
import PetForm from './PetForm';
import { message } from 'antd';
import { useHistory } from "react-router-dom";
import usePetStore from "../../Store/pet-store";


const AddPage = () => {
  const petList = usePetStore((state) => state.petList);
  const setPetList = usePetStore((state) => state.setPetList);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  
  const handleAddPet = async (petData) => {
    setIsLoading(true);

    try{
      const response = await fetch('http://localhost:3001/petList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(petData)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newPet= await response.json();
      setPetList([newPet, ...petList]);

      console.log('Pet added successfully:', newPet);
      message.success('Pet added successfully');
      // Delay the redirect
      setTimeout(() => {
        history.push('/dashboard');
      }, 2000);

    } catch (error) {
      console.error('Error adding pet:', error);
      message.error( 'Error! Please fill all the fields');
    }

  };
  return (
    <>
      <Container fluid>

        <div className="mt-5">
        <PetForm
          formMode="add"
          addPet={handleAddPet}
          isLoading={isLoading}

        />

        </div>
      </Container>
    </>
  );
};

export default AddPage;