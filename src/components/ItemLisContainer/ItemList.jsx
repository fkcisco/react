import {Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import {getFetch} from '../../helpers/getFetch'
import Item  from '../itemCards/Item'
import Cargando from '../../helpers/Cargando'
import {useParams} from 'react-router-dom' 
import { memo } from 'react'




const ListItem = memo (
    () => {

  const [objProductos, setObjProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoriaId } = useParams()
  const { filtro } = useParams()  
  const { valor } = useParams()

  useEffect(()=>{
      if(categoriaId) {
        getFetch()
        .then((resp)=>{    
          setObjProductos(resp
              .filter(producto => producto.tipoProducto === categoriaId)
              .filter(producto => producto[filtro].toLowerCase() === valor)
            )
            
        })
        .catch(err => console.log(err))  
        .finally(()=> setLoading(false))
        }         
        else {
          getFetch()
        .then((resp)=>{    
          setObjProductos(resp)  
        })
        .catch(err => console.log(err))  
        .finally(()=> setLoading(false))


        }
  
  }, [{categoriaId, filtro, valor}])
 
    return ( 
    
    <div>
      { loading 
      ?<Row className=' d-flexjustify-content-md-center'><Cargando titulo="Catalogo de Productos"/></Row>        
      :<div>    
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

  )

  export default ListItem