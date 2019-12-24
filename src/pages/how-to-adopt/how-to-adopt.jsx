import React, { useState } from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './how-to-adopt.css';

function HowToAdopt(props) {
  const defaultFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
  };

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(defaultFormValues);

  const inputs = [
    {
      id: 'firstName',
      label: 'First Name',
      col: 6,
    },
    {
      id: 'lastName',
      label: 'Last Name',
      col: 6,
    },
    {
      id: 'email',
      label: 'Email Address',
      col: 6,
    },
    {
      id: 'phone',
      label: 'Phone Number',
      col: 6,
    }
  ];

  const handleToggle = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
    setForm(defaultFormValues);
  }

  const handleInputChange = (event) => {
    const id = event.target.id;

    setForm({ ...form, [id]: event.target.value });
  };

  return (
    <div className="how-to-adopt-container">
      <h1>How to Adopt</h1>

      <p>
          If you are interested in adopting, 
          please fill out the form below and we will get back to you as soon as we can!
      </p>

      <Form onSubmit={handleToggle}>
        <h5>
          <span className="pr-2">Contact Information</span>
          <FontAwesomeIcon icon="id-card"/>
        </h5>

        <Row>
          {inputs.map(field => (
            <Col key={field.id} sm={field.col} className="margin-top-md">
              <label htmlFor={field.id} className={form[field.id] !== '' ? 'has-value input-container' : 'input-container'}>
                <input
                  type="text"  
                  id={field.id}
                  autoComplete="off"
                  placeholder="&nbsp;"
                  value={form[field.id]}
                  onChange={handleInputChange}
                  maxLength="50"
                  required
                />
            
                <span className="label">{field.label}</span>
                <span className="border"></span>
              </label>
            </Col>
        ))}
        </Row>

        <h5 className="margin-top-lg">
          <span className="pr-2">Adoption Information</span>
          <FontAwesomeIcon icon="paw"/>
        </h5>
        
        <p>Please tell us what dog you are interested in adopting and your overall experience with dogs:</p>
        <Input type="textarea" name="text" id="description" value={form.description} onChange={handleInputChange} />

        <div className="margin-top-md text-right">
          <Button color="primary" type="submit">Complete Application</Button>
        </div>
      </Form>

      <Modal isOpen={isOpen} toggle={handleToggle} className="">
        <ModalHeader toggle={handleToggle}>Application Submitted!</ModalHeader>
        <ModalBody>
          Your application has been submitted!  A LoveBark representative will reach out to you in 1-3 business days. <br /><br />
          Thank you so much! Please contact 555-555-8867 if you have any questions.
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleToggle} color="primary">OK</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default HowToAdopt;