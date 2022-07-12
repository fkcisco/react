import {ListGroup, Row } from 'react-bootstrap'
import {Col } from 'react-bootstrap'
import {Tabs, Tab, Badge} from 'react-bootstrap'
import ItemCount from '../itemCount/ItemCount'
import { useCartContext } from '../../contexts/CartContext'
import { useState } from 'react'


function ItemSingle({ ver }){

  const { NumberWithCommas, PrecioDescuento, addToCard  } = useCartContext()  

  const [ precioFinal, setPrecioFinal ] = useState(descuento(ver.precio,ver.descuento))

  function numeroPunto( x ) {
    return NumberWithCommas(x)
  }

  function descuento( precio , descuento ) {
    return PrecioDescuento( precio , descuento )
  }

  const onAdd = (count, talle) => {      
      addToCard( { ...ver, cantidad:count, talleSeleccionado: talle, precioFinal: precioFinal} )
  }

    
    
 

   return (    
    <>                
      <Row>
        <Col sm={4}>
          <img alt={ver.marca} src={ver.urlMiniatura}/>
        </Col>
        <Col sm={8}>
            <h1>{ver.marca} | {ver.modelo} </h1>
            <h2 className="h1">

              { ver.descuento > 0 && <Badge bg="warning" text="dark">descuento {ver.descuento*100}% </Badge>}

              <Badge bg="light" text="dark">Precio ${numeroPunto(descuento(ver.precio,ver.descuento))}</Badge>
            </h2>
            <h4>
            { ver.descuento > 0 && <Badge bg="danger" text="light">Antes: ${numeroPunto(ver.precio)}</Badge> }
            { 
              ver.stock > 0
              ? <Badge bg="light" text="danger">Stock {ver.stock} {ver.tipoProducto}</Badge>
              : <Badge bg="light" text="danger">Sin Stock</Badge> 
            } 
            </h4>
        
            <Row className="d-flex">
              {/*<Col sm={4}>
                 <Form.Select aria-label="Default select example">
                <option value="0">Talles Disponibles</option>
                {ver.talles.map(talle=> <option key={talle}>{talle}</option> )}
                </Form.Select>
              </Col>*/}
              <Col sm={12} className="d-flex">
                <ItemCount stock={ver.stock} init='1' talles={ver.talles} ident={ver.id} onAdd={onAdd} precioFinal={precioFinal} talleStock={ver.talleStock}/>

              </Col>
              </Row>
        </Col>
      </Row>
      <Row>
            <div className="detalles mb-3">
            <Tabs defaultActiveKey="descripcion" id="uncontrolled-tab-example" className="mb-3 detalles" variant="pills">
              <Tab eventKey="descripcion" title="Descripción">
                <p>{ver.descripcion}</p>
              </Tab>
              <Tab eventKey="informacion" title="Más Información">                        
                <ListGroup variant="flush">
                    <ListGroup.Item>Tipo de producto: {ver.tipoProducto}</ListGroup.Item>
                    <ListGroup.Item>Genero: {ver.genero}</ListGroup.Item>
                    <ListGroup.Item>Material: {ver.material}</ListGroup.Item>
                    <ListGroup.Item>Material Suela: {ver.materialSuela}</ListGroup.Item>
                    <ListGroup.Item>Stock Disponible:{ ver.stock <= 0 ? ver.stock : "Sin Stock"}</ListGroup.Item>
                </ListGroup>
              </Tab>
              <Tab eventKey="envios" title="Formas de Envio">
              <p>Aca van los Detalles del envio:</p>
              </Tab>
            </Tabs>
          </div>
            </Row>
                  
    </>    

)

}

export default ItemSingle