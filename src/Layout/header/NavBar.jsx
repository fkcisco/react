import logo from '../../media/img/logo.svg';
import {Navbar } from 'react-bootstrap'
import {Container } from 'react-bootstrap'
import {Nav } from 'react-bootstrap'
import {NavDropdown } from 'react-bootstrap'
import CartWidget from '../header/CartWidget'
import {NavLink} from 'react-router-dom'
import './header.css'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand className="col-4">
      <NavLink to='/'> 
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" className="d-flex col-8">
      <Nav
        className="me-auto my-2 my-lg-0"
        navbarScroll
      >
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>Inicio</NavLink>

        
        <NavDropdown title="Zapatillas" id="navbarScrollingDropdown">
          <NavLink to="/producto/zapatillas" className={({ isActive }) => (isActive ? 'active nav-item' : 'inactive')}>Todas</NavLink>
          <NavLink to="/producto/zapatillas/search/genero/hombre" className={({ isActive }) => (isActive ? 'active nav-item' : 'inactive')}>Hombre</NavLink>
          <NavLink to="/producto/zapatillas/search/genero/mujer" className={({ isActive }) => (isActive ? 'active nav-item' : 'inactive')}>Mujeres</NavLink>

          <NavLink to="/producto/zapatillas/search/marca/nike" className={({ isActive }) => (isActive ? 'active nav-item' : 'inactive')}>Nike</NavLink>
          <NavLink to="/producto/zapatillas/search/marca/puma" className={({ isActive }) => (isActive ? 'active nav-item' : 'inactive')}>Puma</NavLink>            
         </NavDropdown>        

         <NavDropdown title="Medias" id="navbarScrollingDropdown">
         <NavLink to="/producto/medias" className={({ isActive }) => (isActive ? 'active nav-item' : 'inactive')}>Todas</NavLink>
          <NavLink to="/producto/medias/search/genero/hombre" className={({ isActive }) => (isActive ? 'active nav-item' : 'inactive')}>Hombre</NavLink>
          <NavLink to="/producto/medias/search/genero/mujer" className={({ isActive }) => (isActive ? 'active nav-item' : 'inactive')}>Mujeres</NavLink>         
         </NavDropdown>       
         
         
         <NavLink to='/contacto' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}>Contacto</NavLink>

 

         <CartWidget/> 
      
      </Nav>         
    </Navbar.Collapse> 
          
  </Container>
</Navbar>
    
  )
}

export default NavBar