import {Card } from 'react-bootstrap'
import {ListGroup } from 'react-bootstrap'
import {ListGroupItem } from 'react-bootstrap'
import {Col } from 'react-bootstrap'
import ItemCount from './ItemCount'


function ItemCard({id,marca,descripcion,modelo,talles,precio,stock,urlMiniatura}){

   return ( 
   
      <Col className="col-3 g-1">
          <Card>
                  <Card.Img variant="top" src={urlMiniatura}/>                  
                  <Card.Body>
                    <Card.Title>{marca} </Card.Title>
                    <Card.Text>Modelo: {modelo}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Precio: {precio}</ListGroupItem>
                    <ListGroupItem>Talles: {talles.join('-')}</ListGroupItem> 
                    {stock === "0" ? <ListGroupItem>Sin Stock</ListGroupItem> : <ListGroupItem>Stock: {stock} pares</ListGroupItem> }
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Ver Producto</Card.Link>
                    <ItemCount stock={stock} init='1' ident={id} />
                  </Card.Body>
           </Card>
      </Col>   

)

}

export default ItemCard