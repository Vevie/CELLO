import React from 'react';
import { Container } from 'react-bootstrap';
import AdoptPetsTable from './adoptPetTable';


const AdoptionRequest = () => {


  return (
    <Container fluid>
      <div className="bg-white shadow-sm py-4 px-0 px-md-4">
        <Container>
          <h5 className="mb-0 custom-color fw-semibold">Adoption Requests</h5>
        </Container>
      </div>

      <div className="mt-5 px-0 px-lg-3">
        <AdoptPetsTable />
      </div>
    </Container>
  );
};

export default AdoptionRequest;
