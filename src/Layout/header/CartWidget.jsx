import {Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../../contexts/cartContext'
import { BookmarkHeart } from 'react-bootstrap-icons';



const Carrito= () => {

    const { cart, TotalCarrito, whislist, TotalDeseos } = useCartContext()
    
    console.log( TotalDeseos())

return (  
            
        <>

        

            { whislist.length >= 1 && (
                    <NavLink to="/deseos">
                        <Button variant="danger">
                            <BookmarkHeart/>                    
                            { TotalDeseos()}
                        </Button>
                    </NavLink>             
            )
                
            }

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