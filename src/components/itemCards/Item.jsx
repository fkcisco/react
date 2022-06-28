import { memo } from 'react'
import {Card} from 'react-bootstrap'
import {Badge } from 'react-bootstrap'
import {ListGroup} from 'react-bootstrap'
import {Button } from 'react-bootstrap'
import {ListGroupItem } from 'react-bootstrap'
import {Col } from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import { useCartContext } from '../../contexts/cartContext'
import "./ItemCards.css"

const ItemCard = memo (
({producto}) => { 

  const { NumberWithCommas, PrecioDescuento  } = useCartContext()  

  function numeroPunto( x ) {
    return NumberWithCommas(x)
  }

  function descuento( precio , descuento ) {
    return PrecioDescuento( precio , descuento)
  }

   return (    
      <Col className="col-3 g-1 text-center">
          <Card>
                 { producto.descuento > 0 && <Badge bg="warning" className='oferta'> Oferta {(producto.descuento*100)} % </Badge>  }
                  <Card.Img variant="top" src={producto.urlMiniatura}/>
                  <Card.Body>
                    <Card.Title>{producto.marca} </Card.Title>
                    <Card.Text>Modelo: {producto.modelo}</Card.Text>
                  </Card.Body>
                  <ListGroup className="d-flex">                    
                    <p className='mb-0'>Talles Disponibles</p>                    
                    <h4>
                      {producto.talles.map(talle=>                         
                          <Badge className="mx-1 my-2" bg="dark" key={talle}>
                              {talle}
                          </Badge>                        
                      )}
                    </h4>
                  </ListGroup>
                  <ListGroup className="list-group-flush">                                
                  <ListGroupItem>
                    {
                      producto.stock === "0"
                      ? <div> Sin Stock </div>
                      : <div> Stock{producto.stock} pares de {producto.tipoProducto} </div>
                    }
                  </ListGroupItem>                    
                    { 
                    producto.descuento !== "0" 
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

)
}
)

export default ItemCard