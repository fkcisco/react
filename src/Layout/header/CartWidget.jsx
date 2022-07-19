import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext'
import { BookmarkHeart } from 'react-bootstrap-icons';
import { CaretDownFill } from 'react-bootstrap-icons';
import { OverlayTrigger } from 'react-bootstrap'
import { Popover } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

const CartList= () => {

    const { 
            cart,
            TotalProductCart,
            whislist, 
            TotalProductWhislist, 
            DeleteProductCart,
            DeleteProductWhishList
        } = useCartContext() 
           
    const headerWhislist = (       
        <Popover id="popover-basic">
            <Popover.Header as="h3">
                Lista de Deseos
            </Popover.Header>
            <Popover.Body>
                <Col sm={12}>                                 
                    {
                        whislist.map(item =>
                            <Row key={item.id} className='align-items-center' >                                                                                 
                                <Col >
                                    <img src={item.urlMiniatura} alt={item.modelo} className="img-fluid" />
                                </Col>                                                    
                                <Col >
                                    <p className='text-capitalize'>{item.modelo}</p>                                                                            
                                </Col>
                                <Col >
                                    <Button variant="danger" onClick={() => DeleteProductWhishList(item.id)} >x</Button>                                
                                </Col>                                                
                            </Row >
                        )
                    }
                </Col>
            </Popover.Body>
        </Popover>
      )
    const headerCartList = (      
        <Popover id="popover-basic">
            <Popover.Header as="h3">
                Lista de Carrito
            </Popover.Header>
            <Popover.Body>
                <Col sm={12}>                                 
                    {
                        cart.map(item =>
                            <Row key={item.id} className='align-items-center' >                                                                                 
                                <Col >
                                    <img src={item.urlMiniatura} alt={item.modelo} className="img-fluid" />
                                </Col>                                                    
                                <Col >
                                    <p className='text-capitalize'>{item.modelo}</p>                                                                            
                                </Col>                                                  
                                <Col >
                                    <Button variant="danger" onClick={() => DeleteProductCart(item.id)} >x</Button>                                
                                </Col>
                            </Row >
                        )
                    }
                </Col>            
        </Popover.Body>
        </Popover>
    )

    const CartButton = () => {       
        if( TotalProductCart() === 0) {
            return "Carrito"
        } else if (TotalProductCart() <= 3) {
            return `${TotalProductCart()} Productos`
        } else {
            return "Terminar Compra"
        }   
    } 

    return ( 
        <>
            { 
                whislist.length >= 1 && (
                    <>
                        <NavLink to="/deseos">
                            <Button variant="danger">
                                <BookmarkHeart/>                    
                                { TotalProductWhislist()}                           
                            </Button>
                        </NavLink>                       
                        <OverlayTrigger trigger="click" placement="bottom" overlay={headerWhislist}>                           
                            <CaretDownFill />
                        </OverlayTrigger>
                    </>           
                )                
            }
            {
                <>
                    <NavLink to="/carrito">
                        <Button variant="primary">                    
                            <CartButton/>
                        </Button>
                     </NavLink>
                        {
                            cart.length >= 1 && (  
                                <OverlayTrigger trigger="click" placement="bottom" overlay={headerCartList}>                           
                                    <CaretDownFill />
                                </OverlayTrigger>
                            )
                        }
                    </>
                                
            }        
        </>             
    )
}
export default CartList