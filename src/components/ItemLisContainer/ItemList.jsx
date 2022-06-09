import {Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import {getFetch} from '../helpers/getFetch'
import Item  from '../itemCards/Item'
import Cargando from '../helpers/Cargando'



const ListItem = () => {

  const [objProductos, setObjProductos] = useState([])
  const [loading, setLoading] = useState(true) 

  useEffect(()=>{
      getFetch()
      .then((resp)=>{    
        setObjProductos(resp)  
      })
      .catch(err => console.log(err))  
      .finally(()=> setLoading(false))
  
  }, [])
 
    return ( 
    
    <div>
      { loading ?
      <Row className=' d-flexjustify-content-md-center'>
        <Cargando titulo="Catalogo de Productos"/>
      </Row>        
      :
      <div>    
      <h1 className='py-5'>Catalogo de Zapatillas</h1>  
        <Row>
            
            {objProductos.map(producto =>
                <Item key={producto.id} 
                producto={producto} />
                )}

          </Row>
        </div>

        }
    </div>
   )  
  }

  export default ListItem