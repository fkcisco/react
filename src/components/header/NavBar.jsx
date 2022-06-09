import logo from '../../media/img/logo.svg';
import {Navbar } from 'react-bootstrap'
import {Container } from 'react-bootstrap'
import {Nav } from 'react-bootstrap'
import {NavDropdown } from 'react-bootstrap'
import CartWidget from '../header/CartWidget'
import './header.css'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#" className="col-4"> <img src={logo} className="App-logo" alt="logo" style={{width:350}} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" className="d-flex">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavDropdown title="Medias" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Soquetes</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Tennis</NavDropdown.Item>         
         </NavDropdown>
        <NavDropdown title="Zapatillas" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Nike</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Puma</NavDropdown.Item>         
         </NavDropdown>
        <Nav.Link href="#">Contacto</Nav.Link>
      </Nav>         
    </Navbar.Collapse> 
    <CartWidget/>       
  </Container>
</Navbar>
    
  )
}

export default NavBar