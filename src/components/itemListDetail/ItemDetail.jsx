import { Row} from 'react-bootstrap'
import Cargando from '../../helpers/Cargando'
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
        <Row className='align-content-center'>      
          <ItemSingle key={producto.id} ver={producto} />            
        </Row>      
        </div>
        }
    </div>
   )  
  }

  export default ItemDetail