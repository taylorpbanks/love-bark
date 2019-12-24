import React from 'react';
import { Row, Col } from 'reactstrap';
import './footer.css';

function Footer() {
  return (
    <Row className="margin-bottom-lg footer-container">
      <Col sm="6" className="contact">
        Copyright © 2020 Taylor Banks. All Rights Reserved.<br />
        8929 Fake Street Omaha, Nebraska 68106<br />
        (555-555-8867)
      </Col>
      
      <Col sm="6" className="links">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Security</a>
      </Col>
    </Row>
  )
}

export default Footer;