import {Button} from 'react-bootstrap'
import {Badge } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const Carrito= () => {
    return (  
                  
            <NavLink to="/carrito">
                <Button variant="primary"> Carrito <Badge bg="secondary">0</Badge> </Button>
            </NavLink>
               

    )
}

export default Carrito