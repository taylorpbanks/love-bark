import React, { useState } from 'react';
import {
    Row,
    Col,
    Button,
    Collapse,
  } from 'reactstrap';
import dogs from '../../temp/database.json';
import './available-dogs.css';
import 'pretty-checkbox'

function AvailableDogs(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState({
   age: [true, false],
   playfulness: [true, false],
   friendliness: [true, false],
   exercise: [true, false],
   easeOfTraining: [true, false],
   dogSkills: [true, false],
  });

  const handleToggle = () => setIsOpen(!isOpen);

  const traits = [
    {
      id: 'age',
      label: 'A Puppy',
      hasTrait: false,
    },
    {
      id: 'age',
      label: 'An Adult',
      hasTrait: true,
    },
    {
      id: 'playfulness',
      label: 'Calm',
      hasTrait: false,
    },
    {
      id: 'playfulness',
      label: 'Playful',
      hasTrait: true,
    },
    {
      id: 'friendliness',
      label: 'Shy',
      hasTrait: false,
    },
    {
      id: 'friendliness',
      label: 'Friendly',
      hasTrait: true,
    },
    {
      id: 'exercise',
      label: 'Active',
      hasTrait: true,
    },
    {
      id: 'exercise',
      label: 'A Couch Potato',
      hasTrait: false,
    },
    {
      id: 'easeOfTraining',
      label: 'Obedient',
      hasTrait: true,
    },
    {
      id: 'easeOfTraining',
      label: 'Needing Training',
      hasTrait: false,
    },
    {
      id: 'dogSkills',
      label: 'Good With Dogs',
      hasTrait: true,
    }
  ];

  const getDisplayAge = (age) => {
    const year = 12;

    if (age <= year) {
      return age + ' months';
    }

    return age / year + ' years'; 
  };

  return (
    <div className="available-dogs">
      <h1>Available Dogs</h1>

      <div className="text-center margin-top-md">
        <Button color="primary" onClick={handleToggle} style={{ marginBottom: '1rem' }}>
          {isOpen ? 'Collapse' : 'Expand'} Search Options
        </Button>
      </div>
      
      <Collapse isOpen={isOpen}>
        <h5 className="pl-2">I am looking for a dog who is...</h5>

        <Row className="trait-list">
          {traits.map(trait => (
            <Col sm="3" xs="6" className="trait">
              <div className="pretty p-default p-smooth">
                <input type="checkbox" />
                <div className="state p-success">
                  <label>{trait.label}</label>
                </div>
              </div>
            </Col>
        ))}
        </Row>

      </Collapse>
        
      <Row className="margin-top-lg">
        {dogs.map(dog => (
          <Col className="margin-bottom-md" key={dog.name} sm="4">
            <div className="dog-card">
              <img src={require(`../../images/dogs/${dog.image}.jpg`)} />
              <h5>{dog.name}</h5>
              {getDisplayAge(dog.age)}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AvailableDogs;