import {Button} from 'react-bootstrap'
import {Badge } from 'react-bootstrap'
import {Nav, NavLink } from 'react-bootstrap'

const Carrito= () => {
    return (
  
        <Nav>            
            <NavLink to="/carrito">
                <Button variant="primary"> Carrito <Badge bg="secondary">0</Badge> </Button>
            </NavLink>
        </Nav>        

    )
}

export default Carrito