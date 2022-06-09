import {Card } from 'react-bootstrap'
import {ListGroup } from 'react-bootstrap'
import {ListGroupItem } from 'react-bootstrap'
import {Col } from 'react-bootstrap'
import ItemCount from '../contadorProducto/ItemCount'


function ItemCard({producto}){

   return ( 
   
      <Col className="col-3 g-1">
          <Card>
                  <Card.Img variant="top" src={producto.urlMiniatura}/>                  
                  <Card.Body>
                    <Card.Title>{producto.marca} </Card.Title>
                    <Card.Text>Modelo: {producto.modelo}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Precio: {producto.precio}</ListGroupItem>
                    <ListGroupItem>Talles: {producto.talles.join('-')}</ListGroupItem> 
                    {producto.stock === "0" ? <ListGroupItem>Sin Stock</ListGroupItem> : <ListGroupItem>Stock: {producto.stock} pares</ListGroupItem> }
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Ver Producto</Card.Link>
                    <ItemCount stock={producto.stock} init='1' ident={producto.id} />
                  </Card.Body>
           </Card>
      </Col>   

)

}

export default ItemCard