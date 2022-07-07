import {Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../../contexts/cartContext'
import { BookmarkHeart, CaretDownFill } from 'react-bootstrap-icons';
import {OverlayTrigger, Popover, Col, Row} from 'react-bootstrap'



const Carrito= () => {

    const { cart, TotalCarrito, whislist, TotalDeseos, DelProducto } = useCartContext()
    

    const mostrarListadoDeseos = (       
        
        <Popover id="popover-basic">
          <Popover.Header as="h3">Lista de Deseos</Popover.Header>
          <Popover.Body>
            <Col sm={12}>                                 
                                    {whislist.map(item =>
                                                <Row key={item.id} className='align-items-center' >                                                                                 
                                                        <Col >
                                                            <img src={item.urlMiniatura} alt={item.modelo} className="img-fluid" />
                                                        </Col>                                                    
                                                        <Col >
                                                            <p className='text-capitalize'>{item.modelo}</p>                                                                            
                                                        </Col>                                                  
                                                        {/* <Col >
                                                            <Button variant="danger" onClick={() => DelProducto(item.id)} >x</Button>                                
                                                        </Col> */}
                                                    </Row >
                                        )
                                    }
                </Col> 
           
           </Popover.Body>
        </Popover>
      )

      const mostrarListadoCarrito = (       
        
        <Popover id="popover-basic">
          <Popover.Header as="h3">Lista de Carrito</Popover.Header>
          <Popover.Body>
            <Col sm={12}>                                 
                                    {cart.map(item =>
                                                <Row key={item.id} className='align-items-center' >                                                                                 
                                                        <Col >
                                                            <img src={item.urlMiniatura} alt={item.modelo} className="img-fluid" />
                                                        </Col>                                                    
                                                        <Col >
                                                            <p className='text-capitalize'>{item.modelo}</p>                                                                            
                                                        </Col>                                                  
                                                        <Col >
                                                            <Button variant="danger" onClick={() => DelProducto(item.id)} >x</Button>                                
                                                        </Col>
                                                    </Row >
                                        )
                                    }
                </Col> 
           
           </Popover.Body>
        </Popover>
      )
      

return (  
            
        <>

        

            { whislist.length >= 1 && (
                    <>
                        <NavLink to="/deseos">
                            <Button variant="danger">
                                <BookmarkHeart/>                    
                                { TotalDeseos()}                           
                            </Button>
                        </NavLink> 
                       
                        <OverlayTrigger trigger="click" placement="bottom" overlay={mostrarListadoDeseos}>                           
                            <CaretDownFill />
                        </OverlayTrigger>
                    </>           
            )
                
            }

            { cart.length >= 1 && (
                <>
                <NavLink to="/carrito">
                    <Button variant="primary">                    
                        { cart.length >= 3 
                            ?"Terminar Compra"
                            :`${TotalCarrito()} Productos`
                            
                            
                        }
                    </Button>
                </NavLink>  
                <OverlayTrigger trigger="click" placement="bottom" overlay={mostrarListadoCarrito}>                           
                    <CaretDownFill />
                </OverlayTrigger>
                </>
            )
                
            }        
        </>
               

    )
}

export default Carrito