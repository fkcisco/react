import { memo } from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { getDocs } from 'firebase/firestore'
import { where } from 'firebase/firestore'
import { documentId } from 'firebase/firestore'
import { query } from 'firebase/firestore'
import { writeBatch } from 'firebase/firestore'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext'
import Cargando from '../../helpers/Loading'
import "./pageCart.css"

const CartPage = memo ( () => {  
    const [loading, setLoading] = useState(false)    
    const { cart, 
            CleanCart,
            DeleteProductCart, 
            TotalPriceCart, 
            TotalProductCart, 
            numberWithCommas, 
            applyPriceDiscount, 
            TotalPriceDiscountCart, 
            ToastMessage,
            } = useCartContext() 

    const [nameBuyer, setNameBuyer] = useState('')
    const [phoneBuyer, setPhoneBuyer] = useState('')
    const [mailBuyer, setMailBuyer] = useState('')
    const [mailBuyerControl, setMailBuyerControl] = useState('')
    const [idOrder, setIdOrder] = useState('')      
    
    function applyNumberWithCommas( x ) {
        return numberWithCommas(x)
    }
    function priceDiscount( price , discount ) {
        return applyPriceDiscount( price , discount )
    }
    async function generarOrden(e){
                    setLoading(true)                    
                    e.preventDefault() 
                    const orden = {}
                    orden.buyer = {
                        name: nameBuyer,
                        phone: phoneBuyer,
                        mail: mailBuyer,
                                    }
                    orden.total = TotalPriceDiscountCart()
                    orden.items = cart.map(cartItem => {
                        const ordenId = cartItem.id
                        const orderNombre = cartItem.modelo
                        const ordenPrecio = cartItem.descuento >= 1 ? (priceDiscount(cartItem.precio,cartItem.descuento) * cartItem.cantidad) : (cartItem.precio * cartItem.cantidad)
                        return {ordenId, orderNombre, ordenPrecio}
                                                })                   
                    const db = getFirestore()
                    const ordenCollection = await collection(db,'ordenes')                    
                    if(!nameBuyer) {
                        ToastMessage("debe completar el campo Nombre")
                    } else if(!phoneBuyer) {                        
                        ToastMessage("debe completar el campo Teléfono")
                    } else if(!mailBuyer) {                         
                        ToastMessage("debe completar el campo Mail")
                    } else if(mailBuyer !== mailBuyerControl) {                         
                        ToastMessage("El Mail de control debe considir")
                    } else { 
                        try {
                            const docRef = await addDoc(ordenCollection, {orden} )
                            setIdOrder(docRef.id)
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
                                            stock:res.data().stock - cart.find(item => item.id === res.id).cantidad
                                                    })  
                                ))                      
                        .finally(() => CleanCart())           
                       
                        batch.commit()                        
                    }                    
                    setLoading(false)       
                }                

        return (        
                <Container>          
                    <Row className='mb-5 text-center'>
                        <h1 className='my-5'>Carrito de compras</h1>                  
                    </Row>          
                    <Row>
                        <Row>
                            {
                                loading ?                                             
                                    <Row className='d-flexjustify-content-md-center'>
                                        <Cargando titulo='Orden de Compra' />
                                    </Row>
                                    :
                                    idOrder &&
                                        <div className='text-center'>
                                            <h1>Tu orden de Compra es: { idOrder }</h1>
                                            <div className="text-center mb-2">
                                                <Button variant="primary" >Pagar</Button>
                                            </div>
                                        </div>                                          
                                    }                           
                            {cart.length < 1 ? (
                                <div className='text-center'>                                    
                                    <h2 className='my-5'>Carrito Vacio</h2>
                                    <NavLink to="/">
                                        <Button variant="primary" >Ir a Comprar</Button>
                                    </NavLink>
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
                                                <p className='fw-bold'>$ { item.descuento > 0 ?  applyNumberWithCommas(priceDiscount(item.precio,item.descuento)) : applyNumberWithCommas(item.precio) }</p> 
                                            </Col>
                                            <Col >
                                                <p className='fw-bold'>{item.cantidad} </p>                                
                                            </Col>
                                            <Col >
                                                <Button variant="danger" onClick={() => DeleteProductCart(item.id)} >x</Button>                                
                                            </Col>
                                        </Row >
                                    )}
                                </Col> 
                            )}

                           
                            {cart.length >= 1 && (
                                <Col sm={3} className="sidebarCart" >
                                    <h4 className='text-center fw-bold mb-3'>Detalle de Carrito</h4>              
                                    <div className="text-center"> <p className='fw-bold'>Total {TotalProductCart()} Productos: ${applyNumberWithCommas(TotalPriceDiscountCart())}</p> </div>
                                    {TotalPriceDiscountCart() !== TotalPriceCart() && <div className="text-center"> <p className='fw-bold'>Estas Ahorrando: ${applyNumberWithCommas(TotalPriceCart() - TotalPriceDiscountCart())}</p> </div> }
                                <Form>
                                    <Form.Group className="mb-3 text-center">
                                        <Form.Control type="text" id="nombreOrden" placeholder="Ingresar Nombre" onChange={event => setNameBuyer(event.target.value)}/>
                                        <Form.Control type="phone" id="telefonoOrden" placeholder="Ingresar Teléfono" onChange={event => setPhoneBuyer(event.target.value)}/> 
                                        <Form.Control type="email" id="mailOrden" placeholder="Ingresar Mail" onChange={event => setMailBuyer(event.target.value)}/>
                                        { mailBuyer && <Form.Control type="email" id="setMailBuyerControl" placeholder="Corroborar Mail Mail" onChange={event => setMailBuyerControl(event.target.value)}/> }                                    
                                    </Form.Group>                                        
                                </Form>
                                    <div className="text-center mb-2">
                                        <Button variant="primary" onClick={generarOrden} >
                                            Generar orden
                                        </Button>
                                    </div>
                                    <div className="text-center mb-2">
                                        <Button variant="danger" onClick={CleanCart} >
                                            Vaciar Carrito
                                        </Button>
                                    </div>
                                </Col>)
                            }
                    </Row> 
                    </Row>        
                </Container>
        )
})
export default CartPage