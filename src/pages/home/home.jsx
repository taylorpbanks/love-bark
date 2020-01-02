import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getFeaturedDogs } from '../../services/dogService/dogService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './home.css';

function Home(props) {
  const [dogs, setFeaturedDogs] = useState();

  useEffect(() => {
    if (!dogs) {
      getFeaturedDogs().then((results) => {
        setFeaturedDogs(results);
      })
    }
  });

  const handleClick = () => {
    props.history.push('/available-dogs');
  };

  const getDisplayAge = (age) => {
    const year = 12;

    if (age <= year) {
      return age + ' months';
    }

    return age / year + ' years'; 
  };

  return (
    <div className="home-container">
      <img
        className="welcome-img"
        src={require('../../images/welcome-image.jpg')}
        alt="Dog Face"
      />

      <div className="welcome-msg margin-bottom-md">
        <h1 className="text-center">Welcome to LoveBark</h1>
        <h5 className="margin-bottom-md text-center">The best place to meet your newest furry family member.</h5>
        <hr />
        <p className="p-2">
          LoveBark is a non-profit dog rescue committed to finding dogs of all breeds and sizes their FUR-ever home.
          We work hard to match you to a canine friend that is sure to fit in with your family. 
          Our goal is to give second chances to dogs who have been displaced, due to no fault of their own.
        </p>
        <a href="/available-dogs" className="float-right">
          <span className="pr-1">See Available Dogs</span>
          <FontAwesomeIcon icon="caret-right"/>
        </a>
      </div>

      <div className="margin-top-lg">
        <h3>Featured Dogs</h3>
        <Row>
         {dogs && dogs.map(dog => (dog.featured &&
          <Col key={dog.name} className="card-container" sm="4">
            <Link to={`/available-dogs/${dog.name}`}>
              <div className="dog-card">
                <img src={require(`../../images/dogs/${dog.image}.jpg`)} />
                <h5>{dog.name}</h5>
                  {getDisplayAge(dog.age)}
              </div>
            </Link>
          </Col>
         ))}
         {!dogs && <h6 className="pl-3">No featured dogs available.</h6>}
        </Row>
        <div className="margin-top-md btn-container">
          <Button className="align-content-center" color="secondary" onClick={handleClick}>
            View All Available Dogs
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home;