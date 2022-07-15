import { memo } from 'react'
import {Card} from 'react-bootstrap'
import {Badge } from 'react-bootstrap'
import {ListGroup} from 'react-bootstrap'
import {Button } from 'react-bootstrap'
import {ListGroupItem } from 'react-bootstrap'
import {Col } from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext'
import { BookmarkHeart, BookmarkHeartFill } from 'react-bootstrap-icons';
import "./ItemCards.css"

const ItemCard = memo (
  
({producto, cantidadProductos}) => { 

  const { NumberWithCommas, PrecioDescuento, AddWishlist, whislist, MensajeValidar, TotalDeseos, DelWhishlist, DelProductoDeseos  } = useCartContext()  

  function numeroPunto( x ) {
    return NumberWithCommas(x)
  }

  function descuento( precio , descuento ) {
    return PrecioDescuento( precio , descuento)
  }
 

function whislistAgregar() {
    if(!isInWhislist(producto.id)) {
          new Promise((resultado) => {
            return AddWishlist( { ...producto } )            
        })
    .catch(() => {
      console.log('error');
   })      
   } else {
    MensajeValidar("El producto ya esta en lista de deseos")
   }

  }
   const isInWhislist = ( id ) =>{
    return whislist?.some((i)=> i.id === id)
  }

  
  

   return (
      <>    
        <Col className={ cantidadProductos != null && cantidadProductos <= 4 ? 
                        "col-3 g-1 text-center" :
                        "col-2 g-1 text-center" 
                      } >
            <Card>
                  { producto.descuento > 0 && 
                    <Badge bg="warning" className='oferta'> {(producto.descuento*100)} % OFF </Badge>  
                  }
                  {
                    !isInWhislist(producto.id) ? 
                    <BookmarkHeart className='megusta' onClick={whislistAgregar}/> :
                    <BookmarkHeartFill onClick={() => DelProductoDeseos(producto.id)} className='megusta'/> 
                  }
                    <Card.Img variant="top" src={producto.urlMiniatura}/>
                    <Card.Body>
                      <Card.Title>{producto.marca} </Card.Title>
                      <Card.Text>Modelo: {producto.modelo}</Card.Text>
                    </Card.Body>
                    
                    <ListGroup className="list-group-flush">                               
                   
                      { 
                        producto.descuento !== 0
                        ? <ListGroupItem bg="danger"><h5>Ahora: {numeroPunto(descuento(producto.precio,producto.descuento))}</h5><h6><del>Antes: {numeroPunto(producto.precio)}</del></h6></ListGroupItem>
                        : <ListGroupItem bg="danger"><h5>Precio: {numeroPunto(producto.precio)}</h5></ListGroupItem>
                      }
                    </ListGroup>
                    <Card.Body>
                      <NavLink to={`/detalle/${producto.id}`}>
                        <Button> Ver Producto</Button>
                      </NavLink>                         
                    </Card.Body>
            </Card>
        </Col>
      </> 
)
}
)

export default ItemCard