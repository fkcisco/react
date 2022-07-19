import { Row } from 'react-bootstrap'
import Cargando from '../../helpers/Loading'
import ItemSingle from '../itemSingle/ItemSingle'
import './itemListDetail.css'

const ItemDetail = ( { product, loading }) => {     
 
  return (     
    <div>
      { 
        loading ?
          <Row className='d-flexjustify-content-md-center'>
            <Cargando titulo='Producto' />
          </Row>       
      :
        <div>
          <Row className='align-content-center'>      
            <ItemSingle 
              key={product.id} 
              singleProduct={product} />            
          </Row>      
        </div>
      }
    </div>
  )  
}
export default ItemDetail