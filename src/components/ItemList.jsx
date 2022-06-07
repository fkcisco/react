import {Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import {getFetch} from './helpers/getFetch'
import Item  from './helpers/Item'
import Cargando from './helpers/Cargando'



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
        <Cargando />
      </Row>        
      :
      <div>    
      <h1 className='py-5'>Catalogo de Zapatillas</h1>  
        <Row>
            
            {objProductos.map(producto =>
                <Item key={producto.id} id={producto.id}  stock={producto.stock} marca={producto.marca} descripcion={producto.descripcion} modelo={producto.modelo} talles={producto.talles} precio={producto.precio} urlMiniatura={producto.urlMiniatura} />
                )}

          </Row>
        </div>

        }
    </div>
   )  
  }

  export default ListItem