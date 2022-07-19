import { memo } from 'react'
import {Card} from 'react-bootstrap'
import {Badge, Row } from 'react-bootstrap'
import {ListGroup} from 'react-bootstrap'
import {Button } from 'react-bootstrap'
import {ListGroupItem } from 'react-bootstrap'
import {Col } from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext'
import { useState } from 'react'
import "./ItemCards.css"
import WishList from '../wishList/WishList'

const ItemCard = memo ( ({ product , productQuantity }) => { 

  const { numberWithCommas, 
          applyPriceDiscount} = useCartContext()           
  
  const [style, setStyle] = useState({display: 'none', animation:'all 1s'});

  function applyNumberWithCommas( x ) {
    return numberWithCommas(x)
  }

  function priceDiscount( price , discount ) {
    return applyPriceDiscount( price , discount )
  }  
 
  return (
      <>    
        <Col className={ productQuantity != null && productQuantity <= 4 ? 
                        "col-3 g-1 text-center" :
                        "col-2 g-1 text-center" 
                      } >
            <Card onMouseEnter={ e => {
                     setStyle({display: 'block', animation:'all 1s' });
                 }}
                 onMouseLeave={ e => {
                     setStyle({display: 'none', animation:'all 1s' })
                 }}>
                  { product.descuento > 0 && 
                    <Badge bg="warning" className='oferta'> {(product.descuento*100)} % OFF </Badge>  
                  }
                  {                    
                    <WishList product={product} />
                  }
                    <Card.Img variant="top" src={product.urlMiniatura}/>                   
                    <ListGroup className="list-group-flush">                             
                   
                      { 
                        product.descuento !== 0
                        ? 
                        <ListGroupItem bg="danger">
                          <h5>
                            Ahora: {applyNumberWithCommas(priceDiscount(product.precio,product.descuento))}
                          </h5>
                          <h6>
                            <del>
                              Antes: {applyNumberWithCommas(product.precio)}
                            </del>
                          </h6>
                        </ListGroupItem>
                        : 
                        <ListGroupItem bg="danger">
                          <h5>
                            Precio: {applyNumberWithCommas(product.precio)}
                          </h5>
                        </ListGroupItem>
                      }
                    </ListGroup>                    
                    <Card.Body style={style}>
                      <Row>
                        <Col className='col-6'>
                          <Card.Title>
                            {product.marca}
                          </Card.Title>
                          <Card.Text>
                            {product.modelo}
                          </Card.Text> 
                        </Col>
                        <Col>                 
                          <NavLink to={`/detalle/${product.id}`}>
                            <Button>
                              Ver Producto
                            </Button>
                          </NavLink>  
                        </Col>
                      </Row>                     
                    </Card.Body>                    
            </Card>
        </Col>
      </> 
)
}
)

export default ItemCard