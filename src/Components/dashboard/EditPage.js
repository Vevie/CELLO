import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap"
import PetForm from './PetForm';
import {message } from 'antd';
import { useHistory } from "react-router-dom";
import usePetStore from "../../Store/pet-store";


const EditPage = ({ match }) => {
  const pet = usePetStore((state) => state.pet);
  const setPet = usePetStore((state) => state.setPet);
  const petId = match.params.petId;
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchPetList = async () => {
      try {
        const response = await fetch(`http://localhost:3001/petList/${petId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const petData = await response.json();
        setPet(petData);
      } catch (error) {
        console.error('Error retrieving pet:', error);
      }
    };

    fetchPetList();
  }, [petId, setPet]);

    // const checkEmail = async (email, petId) => {
    //   const response = await fetch(`http://localhost:3001/petList?email=${email}`);
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    //   const petList = await response.json();
    //   return petList.some(pet => pet.id !== petId);
    // };

    // const checkPhone = async (phone, petId) => {
    //   const response = await fetch(`http://localhost:3001/petList?phone=${phone}`);
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    //   const petList = await response.json();
    //   return petList.some(pet => pet.id !== petId);
    // };


  const handlePetUpdate = async (petId, petData) => {
    setIsLoading(true);

    // const emailExists = await checkEmail(petData.email, petId);
    // const phoneExists = await checkPhone(petData.phone, petId);
    // if (emailExists || phoneExists) {
    //   setIsLoading(false);
    //   message.error( 'Error! Email or phone number already exists.');
    //   return;
    // }

    try {
      const response = await fetch(`http://localhost:3001/petList/${petId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(petData)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedPet = await response.json();
      usePetStore.setState((state) => ({
        petList: state.petList.map((pet) =>
          pet.id === petId ? { ...pet, ...petData , imageFile: pet.imageFile} : pet
        ),
      }));

      //setpetList(petList.map(pet => (pet.id === petId ? updatedpet : pet)));
      console.log('Pet updated successfully:', updatedPet);
      message.success( 'Pet updated successfully');
      // Delay the redirect
        setTimeout(() => {
        history.push('/dashboard');
      }, 2000);

    } catch (error) {
      console.error('Error updating pet:', error);
      setIsLoading(false);
    }
  };


  return (
    <>
        <Container fluid>

        <div className="mt-5">

        {pet && <PetForm
            pet={pet}
            updatePet={handlePetUpdate}
            formMode="edit"
            isLoading={isLoading}
        />}
        </div>
        </Container>
    </>
  );
};

export default EditPage;