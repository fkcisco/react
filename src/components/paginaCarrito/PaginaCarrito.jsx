import { memo } from 'react'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../../contexts/cartContext'
import {addDoc, collection, getFirestore } from 'firebase/firestore'
import "./paginaCarrito.css"

const PaginaCarrito = memo (
() => {
    
    const { cart, vaciarCarrito, DelProducto, PrecioTotal, TotalCarrito, NumberWithCommas, PrecioDescuento, PrecioTotalDescuento  } = useCartContext()  
    
    
    function numeroPunto( x ) {
        return NumberWithCommas(x)
      }

      function descuento( precio , descuento ) {
        return PrecioDescuento( precio , descuento )
      }

     
    
                
                const generarOrden = (e) => {
                    e.preventDefault()                    
                    const orden = {}
                    
                    orden.buyer = {name:"francisco",phone:"1550505503",mail:"hola@franrobledo.com"}
                    orden.total = PrecioTotal()

                    orden.items = cart.map(cartItem => {
                        const ordenId = cartItem.id
                        const orderNombre = cartItem.nombre
                        const ordenPrecio = cartItem.precio * cartItem.cantidad

                        return {ordenId, orderNombre, ordenPrecio}
                    })
                    
                        
                    const db = getFirestore()
                    const ordenCollection = collection(db,'ordenes')
                    console.log(ordenCollection)
                    console.log(orden)

                    addDoc(ordenCollection, {
                        creada: orden.ordenId,
                        usuario: [{ name: orden.orderNombre }]
                    })                  

                    .then(resp=>console.log(resp))
                    .catch(err => console.log("error"+err))
                    .finally()              
                    

                }

    
      

    return (        
                <Container>          
                    <Row className='mb-5 text-center'>
                        <h1 className='my-5'>Carrito de compras</h1>                    
                                
                               
                    </Row>            
                    <Row>
                    <Row>
                            {cart.length < 1 ? (
                                <div className='text-center'>
                                    <h2 className='my-5'>Carrito Vacio</h2>
                                    <NavLink to="/"><Button variant="primary" >Ir a Comprar</Button></NavLink>
                                </div> 
                            ) : (
                                <Col sm={9} className="detalleCarrito" >                                 
                                {cart.map(item =>
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
                                                    <Col >
                                                        <p className='text-capitalize'>Talle: {item.talleSeleccionado}</p>                                                                            
                                                    </Col>
                                                    <Col >                                           
                                                    <p className='fw-bold'>$ { item.descuento > 0 ?  numeroPunto(descuento(item.precio,item.descuento)) : numeroPunto(item.precio) }</p> 
                                                    </Col>
                                                    <Col >
                                                        <p className='fw-bold'>{item.cantidad} </p>                                
                                                    </Col>
                                                    <Col >
                                                        <Button variant="danger" onClick={() => DelProducto(item.id)} >x</Button>                                
                                                    </Col>
                                                </Row >
                                    )
                                }
                                </Col> 
                                    )                              
                              }
                        {cart.length >= 1 && (
                            <Col sm={3} className="sidebarCart" >
                                <h4 className='text-center fw-bold mb-3'>Detalle de Carrito</h4>              
                                <div className="text-center"> <p className='fw-bold'>Total {TotalCarrito()} Productos: ${numeroPunto(PrecioTotalDescuento())}</p> </div>
                                {PrecioTotalDescuento() !== PrecioTotal() && <div className="text-center"> <p className='fw-bold'>Estas Ahorrando: ${numeroPunto(PrecioTotal() - PrecioTotalDescuento())}</p> </div> }
                                <div className="text-center mb-2"><Button variant="primary" >Pagar</Button></div>
                                <div className="text-center mb-2"><Button variant="primary" onClick={generarOrden} >Generar orden</Button></div>
                                <div className="text-center mb-2"><Button variant="danger" onClick={vaciarCarrito} >Vaciar Carrito</Button></div>
                            </Col>)
                        }
                    </Row> 
                    </Row>        
                </Container>
                )
    }
  )

export default PaginaCarrito