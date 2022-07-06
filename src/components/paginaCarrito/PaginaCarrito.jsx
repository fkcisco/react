import { memo, useState } from 'react'
import {Container, Form} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import { addDoc, collection, getFirestore, updateDoc, doc, getDocs, where, documentId, query, writeBatch } from 'firebase/firestore'
import {Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { useCartContext } from '../../contexts/cartContext'
import "./paginaCarrito.css"

const PaginaCarrito = memo (
() => {
    
    const { cart, vaciarCarrito, DelProducto, PrecioTotal, TotalCarrito, NumberWithCommas, PrecioDescuento, PrecioTotalDescuento, MensajeValidar  } = useCartContext()  
    
    
    function numeroPunto( x ) {
        return NumberWithCommas(x)
      }

      function descuento( precio , descuento ) {
        return PrecioDescuento( precio , descuento )
      }

      const [nameBuyer, setNameBuyer] = useState('')
      const [phoneBuyer, setPhoneBuyer] = useState('')
      const [mailBuyer, setMailBuyer] = useState('')

      const [idPedido, setIdPedido,] = useState('')         
    
      

        async function generarOrden(e){
                    e.preventDefault()                    
                   
                    const orden = {}

                    orden.buyer = {
                        name: nameBuyer,
                        phone: phoneBuyer,
                        mail: mailBuyer,
                            }
                    orden.total = PrecioTotal()

                    orden.items = cart.map(cartItem => {
                        const ordenId = cartItem.id
                        const orderNombre = cartItem.modelo
                        const ordenPrecio = cartItem.precio * cartItem.cantidad

                        return {ordenId, orderNombre, ordenPrecio}
                    })
                    
                    // insertar orden de pedido nueva    
                    const db = getFirestore()
                    const ordenCollection = await collection(db,'ordenes')                     
                    
                    if(!nameBuyer) {
                        MensajeValidar("debe completar el campo Nombre")
                    } else if(!phoneBuyer) {                        
                        MensajeValidar("debe completar el campo Teléfono")
                    } else if(!mailBuyer) {                         
                        MensajeValidar("debe completar el campo Mail")
                    } else { 

                        try {
                            const docRef = await addDoc(ordenCollection, {orden} )
                            setIdPedido(docRef.id)
                            console.log("ID de refencia: ", docRef.id);
                            console.log(orden.buyer)
                        } catch (e) {
                            console.error("Error: ", e);
                        }

                        const queryCollectionStock = collection(db,'productos')
                        
                        const queryActualizarStock = await query (
                                queryCollectionStock,
                                where (documentId(),'in', cart.map(it => it.id))   
                              )
    
                        const batch = writeBatch(db)
    
                        await getDocs(queryActualizarStock)
                        .then(
                            resp => resp.docs.forEach(
                                res => batch.update(res.ref,{
                                            stock:
                                            res.data().stock - cart.find(item => item.id === res.id).cantidad
                                                    })  
                                ))  
                        .finally(() => vaciarCarrito())                
                       
    
                        batch.commit()
                    }
                    
                             
                    

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
                                    { idPedido &&
                                        <div>
                                            <h1>Tu orden de Compra es: { idPedido }</h1>
                                             <div className="text-center mb-2"><Button variant="primary" >Pagar</Button></div>
                                        </div>
                                    }
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
                               <Form>
                                    <Form.Group className="mb-3 text-center">
                                        {/* <Form.Label htmlFor="nombre">Nombre</Form.Label> */}
                                        <Form.Control type="text" id="nombreOrden" placeholder="Ingresar Nombre" onChange={event => setNameBuyer(event.target.value)}/>
                                        {/* <Form.Label className="text-center">Teléfono</Form.Label> */}
                                        <Form.Control type="phone" id="telefonoOrden" placeholder="Ingresar Teléfono" onChange={event => setPhoneBuyer(event.target.value)}/> 
                                        {/* <Form.Label className="text-center">Email</Form.Label> */}
                                        <Form.Control type="email" id="mailOrden" placeholder="Ingresar Mail" onChange={event => setMailBuyer(event.target.value)}/>                                       
                                    </Form.Group>
                                    
                                   
                                </Form>

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