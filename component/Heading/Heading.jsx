import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import './Heading.css'
const Heading = () => {
  return (
    <div>
    <Navbar className='bg-primary text-white' id='ContSec' >
    <Container  >
      <Navbar.Brand href="#home" id='text' >Contact Info:elle-learn410@gmailo.com</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <NavDropdown title="Language" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Hausa</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">
      Yoruba
      </NavDropdown.Item>

      <NavDropdown.Item href="#action/3.3">Igbo</NavDropdown.Item>
    </NavDropdown>
    <Button variant="outine-primary" className='bg-white text-dark' id='#hallobtn' >Learn With Us</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Heading
