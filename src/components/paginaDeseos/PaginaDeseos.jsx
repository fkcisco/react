import { memo, useState } from 'react'
import {Container, Form} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../../contexts/cartContext'
//import "./paginaCarrito.css"

const PaginaDeseos = memo (
() => {
    
    const { whislist  } = useCartContext()        


    return (        
                <Container>          
                    <Row className='mb-5 text-center'>
                        <h1 className='my-5'>Lisita de Deseos</h1>                   
                    </Row>            
                    <Row>
                    <Row>
                            {whislist.length < 1 ? (
                                <div className='text-center'>
                                    <h2 className='my-5'>Lista Vacia</h2>
                                    <NavLink to="/"><Button variant="primary" >Likear Productos</Button></NavLink>
                                </div> 
                            ) : (
                                <Col sm={12} className="detalleCarrito" >                                 
                                {whislist.map(item =>
                                            <Row key={item.id} className='align-items-center' >                                                                                 
                                                    <Col >
                                                        <img src={item.urlMiniatura} alt={item.modelo} className="img-fluid" />
                                                    </Col>
                                                    <Col >
                                                        <p className='text-capitalize fw-bold'>{item.tipoProducto}</p>                                                                            
                                                    </Col>
                                                    <Col >
                                                        <p className='text-capitalize'>{item.modelo}</p>                                                                            
                                                    </Col>                                                   
                                            </Row >
                                    )
                                }
                                </Col> 
                                    )                              
                              }                        
                    </Row> 
                    </Row>        
                </Container>
                )
    }
  )

export default PaginaDeseos