import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { useCartContext } from '../../contexts/cartContext'

import "./paginaContacto.css"

const PaginaCarrito = () => {
    
    const { cart, vaciarCarrito, DelProducto, PrecioTotal  } = useCartContext()
    console.log(cart) 
    

    return (
        
                <Container fluid>          
                    <Row className='mb-5 text-center'>
                        <h1>Carrito de compras</h1>
                    </Row>            
                    <Row>
                    {cart.length < 1 ? (
                        <h2 className='text-center'>Carrito Vacio</h2>
                    ) : (
                        cart.map(item =>                        
                                <Row key={item.id}>
                                        <Col sm={4}>
                                            <img src={item.urlMiniatura} alt={item.modelo} className="img-fluid" />
                                        </Col>
                                        <Col sm={8}>
                                            <h1>{item.tipoProducto}</h1>
                                            <h2>{item.modelo}</h2>
                                            <p>precio: {item.precio}</p> 
                                            <p>cantidad: {item.cantidad} </p>
                                            <Button variant="danger" onClick={() => DelProducto(item.id)} >Eliminar</Button>                                
                                        </Col>
                                </Row>                            
                            )
                        )
                        }
                    </Row>

                    <div className="text-center">
                        <p>total: {PrecioTotal()}</p>
                    </div>

                    <div className="text-center">
                        <Button variant="danger" onClick={vaciarCarrito} >Vaciar Carrito</Button> 
                    </div>          
                </Container>
                )
  }

export default PaginaCarrito