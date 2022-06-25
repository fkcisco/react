import { memo } from 'react'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../../contexts/cartContext'

import "./paginaContacto.css"

const PaginaCarrito = memo (

() => {
    
    const { cart, vaciarCarrito, DelProducto, PrecioTotal  } = useCartContext()    


    return (        
                <Container>          
                    <Row className='mb-5 text-center'>
                        <h1>Carrito de compras</h1>
                    </Row>            
                    <Row>
                    {cart.length < 1 ? (
                        <div className='text-center'>
                            <h2>Carrito Vacio</h2>
                            <NavLink to="/"><Button variant="primary" >Ir a Comprar</Button></NavLink>
                        </div> 
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

                    {!cart && <div className="text-center"> <p>total: {PrecioTotal()}</p> </div> }

                    {!cart && <div className="text-center"><Button variant="danger" onClick={vaciarCarrito} >Vaciar Carrito</Button></div> }

                      

                     </Row>        
                </Container>
                )
  }

  )

export default PaginaCarrito