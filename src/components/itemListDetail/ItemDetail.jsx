import { Container, Row} from 'react-bootstrap'
import Cargando from '../helpers/Cargando'
import ItemSingle from '../itemCards/ItemSingle'
import './itemListDetail.css'

const ItemDetail = ( { producto, loading }) => {
      
 
    return ( 
    
    <div>
      { loading ?
      <Row className='d-flexjustify-content-md-center'>
        <Cargando titulo='Producto' />
      </Row>        
      :
      <div>  
      <Container fluid className='singlePageCatalogo p-5 mt-5'>
      <Container className='d-flex'>
      <Row className='align-content-center'>       
                             
            <ItemSingle key={producto.id} ver={producto} />            
                            
          </Row>
          </Container> 
          </Container> 
        </div>
        }
    </div>
   )  
  }

  export default ItemDetail