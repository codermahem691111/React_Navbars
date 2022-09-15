import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icon1 from './Images/Icon1.svg' 
import Button from 'react-bootstrap/Button';
import './Navbar2.css'
function BasicExample() {
  return ( 
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"> <img src={Icon1}  ></img>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='Nl'>Home</Nav.Link>
            <Nav.Link href="#About Us" className='Nl'>About Us</Nav.Link>
            <Nav.Link href="#Courses" className='Nl' >Courses</Nav.Link>
            <Nav.Link href="#Library" className='Nl' >Library</Nav.Link>
            <Nav.Link href="#Contact" className='Nl'>Contact</Nav.Link>
            <Nav.Link href="#login" className='Nl' >Login</Nav.Link>
            <Button variant="outline-primary" className='bg-primary text-white'  id='btn1'>Join Community</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;