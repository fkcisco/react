import {Button} from 'react-bootstrap'
import {Badge } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../../contexts/cartContext'



const Carrito= () => {

    const { TotalCarrito  } = useCartContext()  
    
    return (  
                  
            <NavLink to="/carrito">
                <Button variant="primary"> Carrito 
                    <Badge bg="secondary">
                    {TotalCarrito()}
                    </Badge> 
                </Button>
            </NavLink>
               

    )
}

export default Carrito