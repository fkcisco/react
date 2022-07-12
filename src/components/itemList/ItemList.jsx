import {Row } from 'react-bootstrap'
import Item  from '../itemCards/ItemCards'
import Cargando from '../../helpers/Cargando'
import { memo} from 'react'
import { useProductContext } from '../../contexts/ProductContext'
import { useState } from 'react'

const ListItem = memo (
    () => {
      
   const {loading, ProductsList } = useProductContext() 
  
  //const [loading, setLoading] = useState(true) 

  //objProductos.length <= 0 && ProductsList()


      const [productos, setProductos] = useState(ProductsList())

  //     const [bool, setBool] = useState(true)    
          
  //     const { categoriaId } = useParams()
  //     const { filtro } = useParams()  
  //     const { valor } = useParams()


  //   useEffect(()=>{
  //     if(categoriaId && filtro && valor) {   
      
  //         const db = getFirestore()
  //         const queryCollection = collection(db,'productos')
  //         const queryCollectionFilter = query(queryCollection, where('tipoProducto','==', categoriaId), where(filtro,'==', valor))
  //         getDocs(queryCollectionFilter)               
  //         .then(data => setObjProductos(data.docs.map( item => ({id: item.id, ...item.data() } ) ) ) )
  //         .catch(err => console.log(err))
  //         .finally(()=>setLoading(false))                
      
  //     } else {       
  //                     const db = getFirestore()
  //                     const queryCollection = collection(db,'productos')
  //                     getDocs(queryCollection)
  //                     .then(data => setObjProductos(data.docs.map( item => ({id: item.id, ...item.data() } ) ) ) )
  //                     .catch(err => console.log(err))
  //                     .finally(()=>setLoading(false))               
  //     } 
      
    
      
  // }, [{bool}]) 

  return ( 
    
    <div>
      { loading 
      ?<Row className=' d-flexjustify-content-md-center'><Cargando titulo="Catalogo de Productos"/></Row>        
      :<div>    
      <h1 className='py-5 text-center'>Catalogo de Zapatillas</h1>  
        <Row>
            
            {productos.map(producto =>
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