import { ListGroup } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'
import ItemCount from '../itemCount/ItemCount'
import { useCartContext } from '../../contexts/CartContext'
import { useState } from 'react'
import WishList from '../wishList/WishList'

function ItemSingle({ singleProduct }){

  const { numberWithCommas, 
          applyPriceDiscount,
          addProductCard  } = useCartContext() 

  const [ finalPrice, setFinalPrice ] = useState(priceDiscount( singleProduct.precio , singleProduct.descuento))
  
  const onAdd = ( count , size ) => {      
    addProductCard( 
      { 
        ...singleProduct, 
        cantidad:count, 
        talleSeleccionado: size, 
        precioFinal: finalPrice
      }
    )
  }  
  function applyNumberWithCommas( x ) {
    return numberWithCommas( x )
  }  
  function priceDiscount( price , discount ) {
    return applyPriceDiscount( price , discount )
  }
  return (    
    <>                
      <Row>
        <Col sm={4} style={{position: "relative"}}>
        <WishList product={singleProduct} />          
          <img 
            alt={singleProduct.marca}
            src={singleProduct.urlMiniatura}
            className="img-fluid"/>
        </Col>
        <Col sm={8}>
            <h1>{singleProduct.marca} | {singleProduct.modelo} </h1>
            <h2 className="h1">
              { 
                singleProduct.descuento > 0 && <Badge bg="warning" text="dark">descuento {singleProduct.descuento*100}% </Badge>
              }
              <Badge bg="light" text="dark">
                Precio ${applyNumberWithCommas(priceDiscount(singleProduct.precio,singleProduct.descuento))}
              </Badge>
            </h2>
            <h4>
              { 
                singleProduct.descuento > 0 && <Badge bg="danger" text="light">Antes: ${applyNumberWithCommas(singleProduct.precio)}</Badge> 
              }
              { 
                singleProduct.stock > 0
                  ? <Badge bg="light" text="danger">Stock {singleProduct.stock} {singleProduct.tipoProducto}</Badge>
                  : <Badge bg="light" text="danger">Sin Stock</Badge> 
              } 
            </h4>        
            <Row className="d-flex">              
              <Col sm={12} className="d-flex">
                <ItemCount 
                  stock={singleProduct.stock} 
                  init='1' sizeList={singleProduct.talles} 
                  ident={singleProduct.id}
                  onAdd={onAdd} 
                  PriceFinal={finalPrice} 
                  talleStock={singleProduct.talleStock}
                />
              </Col>
            </Row>
        </Col>
      </Row>
      <Row>
        <div className="detalles mb-3">
          <Tabs defaultActiveKey="descripcion" id="uncontrolled-tab-example" className="mb-3 detalles" variant="pills">
            <Tab eventKey="descripcion" title="Descripción">
              <p>{singleProduct.descripcion}</p>
            </Tab>
            <Tab eventKey="informacion" title="Más Información">                        
              <ListGroup variant="flush">
                <ListGroup.Item>Tipo de producto: {singleProduct.tipoProducto}</ListGroup.Item>
                { singleProduct.genero && <ListGroup.Item>Genero: {singleProduct.genero}</ListGroup.Item>}
                <ListGroup.Item>Material: {singleProduct.material}</ListGroup.Item>
                { singleProduct.materialSuela && <ListGroup.Item>Material Suela: {singleProduct.materialSuela}</ListGroup.Item> }
                <ListGroup.Item>Stock Disponible:{ singleProduct.stock >= 1 ? singleProduct.stock : "Sin Stock"}</ListGroup.Item>
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