import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  Collapse,
  NavbarText,
  NavbarToggler,
} from 'reactstrap';

import './navigation.css';

function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/home">
        <span className="pr-1">LoveBark</span>
        <FontAwesomeIcon icon="dog"/>
      </NavbarBrand>
        
      <NavbarToggler onClick={toggleNavBar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/available-dogs">Available Dogs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/how-to-adopt">How to Adopt</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact-us">Contact Us</NavLink>
          </NavItem>
        </Nav>

        <NavbarText className="float-right">
          <NavLink href="/">
            <span className="pr-2">Log out</span>
            <FontAwesomeIcon icon="sign-out-alt"/>
          </NavLink>
        </NavbarText>
       </Collapse>
    </Navbar>
  )
}

export default Navigation;