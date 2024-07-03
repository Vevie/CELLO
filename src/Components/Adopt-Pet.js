import React, {useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap"
import AdoptCards from "./adopt-pet/adoptCards"
import {NavBar} from "./landing/Navbar"
import usePetStore from "../Store/pet-store";


const AdoptPage = () => {

    const petList = usePetStore((state) => state.petList);
  
    useEffect(() => {
      fetchPetList();
    }, []);
  
    const fetchPetList = async () => {
      try {
        const response = await fetch('http://localhost:3001/petList');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        usePetStore.setState({ petList: data });
      } catch (error) {
        console.error('Error retrieving pet:', error);
      } finally {
      }
    };


    return (
        <>

        <NavBar className="bg-light bg-white" />
        <div className="adoptpage">

        <Container>
            <h2 className="text-center custom-color">Adopt today</h2>
            <h6 className="text-center custom-color mb-5">How adoption works</h6>
            <Row>
            {petList.map((pet) => (
                <Col key={pet.id} xs={12} md={6} lg={4}>
                    <AdoptCards 
                        petName={pet.petName}
                        petAge={pet.petAge}
                        price={pet.price}
                        status={pet.status}
                        imageFile={pet.imageFile}
                    />
                </Col>
            ))}
            </Row>
        </Container>
        </div>
        </>
    );
};

export default AdoptPage;
