import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact-us.css';

class ContactUs extends React.Component {
  render() {
    return (
      <div className="contact-us-container">
        <img
          className="contact-us-img"
          src={require('../../images/contact-us.jpg')}
          alt="Dog Face"
        />

        <div className="heading">
          <div className="headers">
            <h1>Let's get in touch!</h1>
            <p>
              Need to get in touch?  We would love to hear from you.  Here is how you can reach out.
            </p>
          </div>

          <Row>
            <Col sm={{size: 7, offset: 1}} className="text-center contact-card">
              <h5 className="margin-bottom-sm">
                <FontAwesomeIcon icon="phone" size="2x" className="pb-2" />
              <br />
              Give Us a Ring
            </h5>

            <p>
              Our representatives are available Monday through Friday, 8 a.m. - 4 p.m. <br />
            </p>
            <a href="tel:555-555-8876">555-555-8876</a>
          </Col>
          </Row>

          <Row>
          <Col sm={{size: 7, offset: 1}} className="text-center contact-card">
            <h5 className="margin-bottom-sm">
              <FontAwesomeIcon icon="envelope" size="2x" className="pb-2" />
              <br />
              Drop Us a Note
            </h5>

            <p>
              Prefer to get ahold of us during off business hours? No problem. <br />
            </p>
            <a href="mailto:taylorpbanks@users.noreply.github.com">taylorpbanks@users.noreply.github.com</a>
          </Col>
        </Row>
        </div>
      </div>
    )
  }
}

export default ContactUs;