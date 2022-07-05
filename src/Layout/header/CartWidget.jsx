import {Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../../contexts/cartContext'



const Carrito= () => {

    const { cart, TotalCarrito, whislist  } = useCartContext()    

return (  
            
        <>

            { whislist.length >= 1 && (
                    <NavLink to="/">
                        <Button variant="primary">                    
                            { `${TotalCarrito(whislist)} Productos`}
                        </Button>
                    </NavLink>             
            )
                
            }

            { cart.length >= 1 && (
                <NavLink to="/carrito">
                    <Button variant="primary">                    
                        { cart.length >= 3 
                            ?"Terminar Compra"
                            :`${TotalCarrito(cart)} Productos`        
                        }
                    </Button>
                </NavLink>             
            )
                
            }        
        </>
               

    )
}

export default Carrito