import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, CardColumns } from 'react-bootstrap';
import PetCard from './PetCard';

var mockedPets = [
  { id: "1", name: "Berty", description: "Has a good nose for truffles" },
  { id: "2", name: "Argo", description: "A superhero (of the dog world)" },
  { id: "3", name: "Fred", description: "Has opinions about sausages" },
];

const App: React.FC = () => {
    return (
      <Container>  
        <div>
        <h2 style={{ padding: "10px 20px", textAlign: "center", color: "dark blue"}}>
        Pet Shelter</h2>        
       </div>
       <div style={{ paddingBottom: "20px", textAlign: "center"}}>
        Welcome to our Pet shelter!        <br/>
        We have plenty of our furry friends that awaits your love and care
       </div>
        <Row>
        <Col>
          <CardColumns>
          {
            mockedPets.map((pet) => <PetCard key={pet.id} pet={pet} />)
          }
          </CardColumns>
        </Col>
        </Row>
      </Container>
    );
 
}

export default App;
