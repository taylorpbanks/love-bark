import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Button,
  Spinner,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDogByName } from '../../../services/dogService/dogService';
import './profile.css';

function Profile(props) {
  const [dog, setSelectedDog] = useState();

  useEffect(() => {
    if (!dog) {
      getDogByName(props.match.params.name).then((results) => {
        setSelectedDog(results);
      })
    }
  });

  const traits = [
    {
      id: 'exercise',
      label: 'Exercise',
    },
    {
      id: 'friendliness',
      label: 'Friendliness',
    },
    {
      id: 'playfulness',
      label: 'Playfulness',
    },
    {
      id: 'leashManners',
      label: 'Leash Manners',
    },
    {
      id: 'dogSkills',
      label: 'Good With Other Dogs',
    },
  ];

  const handleAdoptMeClick = () => {
    props.history.push('/how-to-adopt');
  };

  const getDisplayAge = (age) => {
    const year = 12;
  
    if (age <= year) {
      return age + ' months';
    }
  
    return age / year + ' years'; 
  };

  const numberOfBones = (numOfBones) => {
    const bones = [];
    for (var i = 0; i < numOfBones; i++) {
      bones.push(<FontAwesomeIcon icon="paw" className="pr-1" />);
    }

    return bones;
  }

  if (!dog) {
    return (
      <div className="loading-container">
        <Spinner type="grow" style={{ width: '3rem', height: '3rem' }} color="success" /><br />
      </div>
    )
  }

  return (
    <div className="profile-container">
      <h1 className="margin-bottom-md text-center">{dog.name}</h1>

      <Row>
        <Col sm="7" className="margin-bottom-md">
          <img src={require(`../../../images/dogs/${dog.image}.jpg`)} />
        </Col>

        <Col sm="5">
          <Row>
            <Col sm="12" className="text-center margin-bottom-md">
              <FontAwesomeIcon icon="bone" size="3x" />
            </Col>
          
            <Col xs="6" className="text-right">
              <label>Breed</label>
            </Col>
          
            <Col xs="6">
              {dog.breed}
            </Col>

            <Col xs="6" className="text-right">
              <label>Age</label>
            </Col>
          
            <Col xs="6">
              {getDisplayAge(dog.age)}
            </Col>

            <Col xs="6" className="text-right">
              <label>Color</label>
            </Col>
          
            <Col xs="6">
              {dog.color}
            </Col>

            <Col xs="6" className="text-right">
              <label>Weight</label>
            </Col>
          
            <Col xs="6">
              {dog.weight}lbs
            </Col>

            <Col xs="6" className="text-right">
              <label>Adoption Fee</label>
            </Col>
          
            <Col xs="6">
              ${dog.adoptionFee}.00
            </Col>
          </Row>

          <hr />
        
          <h4 className="text-center">Traits</h4>
          
          {traits.map(trait => (
            <Row xs="6">
              <Col xs="6 text-right">
                <label>{trait.label}</label>
              </Col>
              <Col xs="6">
                {numberOfBones(dog.traits[trait.id])}
              </Col>
            </Row>
          ))}

          <Col sm="12" className="margin-top-md text-center">
            <Button className="secondary" onClick={handleAdoptMeClick}>
              Adopt Me!
            </Button>
          </Col>
        </Col>
      </Row>

      <a href="/available-dogs">
        <FontAwesomeIcon icon="caret-left"/>
        <span className="pl-1">See Available Dogs</span>
      </a>

    </div>
  )
}

export default Profile;