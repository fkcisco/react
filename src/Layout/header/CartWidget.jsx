import {Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../../contexts/cartContext'



const Carrito= () => {

    const { cart, TotalCarrito  } = useCartContext()    

return (  
            
        <>
            { cart.length >= 1 && (
                <NavLink to="/carrito">
                    <Button variant="primary">                    
                        { cart.length >= 3 
                            ?"Terminar Compra"
                            :`${TotalCarrito()} Productos`        
                        }
                    </Button>
                </NavLink>             
            )
                
            }        
        </>
               

    )
}

export default Carrito